import { Month } from './Month'
import { LocalDateType } from './types'
import { DayOfWeek } from './DayOfWeek'
import { DayOfWeekHelper } from './helpers'

import { ADLocalDate, BSLocalDate } from './ILocalDate'
import type { ILocalDate } from './ILocalDate'

class Utils {
  static isLeapYear(year: number, type: LocalDateType): boolean {
    if (type == LocalDateType.BS) {
      return false
    } else {
      if (year % 4 == 0) {
        if (year % 100 == 0) {
          // Century Year must be divisible by 400 for Leap year
          return year % 400 == 0
        } else {
          return true
        }
      } else {
        return false
      }
    }
  }

  static monthDaysBS(year: number): number[] {
    return BSLocalDate.monthDays(year)
  }

  static monthDaysAD(): number[] {
    return ADLocalDate.monthDays
  }

  static lengthOfYear(year: number, type: LocalDateType): number {
    const leap = Utils.isLeapYear(year, type) ? 1 : 0
    const monthDays =
      type == LocalDateType.BS ? Utils.monthDaysBS(year) : Utils.monthDaysAD()

    return monthDays.reduce((a, b) => a + b, 0) + leap
  }

  static lengthOfMonth(
    year: number,
    month: Month,
    type: LocalDateType
  ): number {
    if (Utils.isLeapYear(year, type) && month == Month.FEBRUARY_JESTHA) {
      return 29
    } else {
      const monthDays =
        type == LocalDateType.BS ? Utils.monthDaysBS(year) : Utils.monthDaysAD()

      return monthDays[month.valueOf() - 1]
    }
  }
}

class MathHelper {
  static floorDiv(x: number, y: number): number {
    let r = x / y
    // if the signs are different and modulo not zero, round down
    if ((x ^ y) < 0 && r * y != x) {
      r--
    }

    return r
  }

  static floorMod(x: number, y: number): number {
    return x - MathHelper.floorDiv(x, y) * y
  }

  static addExact(x: number, y: number): number {
    const r: number = x + y
    if (x ^ r && (y ^ r) < 0) {
      throw new Error('long overflow')
    } else {
      return r
    }
  }
}

class Period {
  static weeksBetween(
    start: ILocalDate,
    end: ILocalDate,
    firstDayOfWeek: DayOfWeek = DayOfWeek.SUNDAY
  ): number {
    const [isNegative, startEnd] = Period.startEndType(start, end)
    const [earlyDate, laterDate] = startEnd

    let totalDays = Period.daysBetween(earlyDate, laterDate) + 1

    if (totalDays <= 1) {
      return 1
    }

    const startDayOfWeek = earlyDate.dayOfWeek
    const dom = DayOfWeekHelper.valueOf(
      DayOfWeekHelper.minus(
        DayOfWeekHelper.valueOf(startDayOfWeek),
        firstDayOfWeek
      )
    )
    let count = 0
    if (dom > 0) {
      count++
      totalDays -= dom
    }

    const fullWeeks = totalDays / 7
    const remDays = totalDays % 7
    count += fullWeeks
    if (remDays > 0) {
      count++
    }

    return count * isNegative
  }

  static monthsBetween(start: ILocalDate, end: ILocalDate): number {
    if (start == end) {
      return 0
    }

    const [isNegative, startEnd] = Period.startEndType(start, end)
    const [earlyDate, laterDate] = startEnd

    const yearDifference = laterDate.year - earlyDate.year - 1
    let dom = yearDifference * Month.DECEMBER_CHAITRA.valueOf()
    dom +=
      (Month.DECEMBER_CHAITRA - earlyDate.month).valueOf() +
      laterDate.monthValue

    return dom * isNegative
  }

  static daysBetween(start: ILocalDate, end: ILocalDate): number {
    if (start == end) {
      return 0
    }

    const [isNegative, startEnd] = Period.startEndType(start, end)
    const [earlyDate, laterDate] = startEnd

    if (earlyDate.year == laterDate.year) {
      return (laterDate.dayOfYear - earlyDate.dayOfYear) * isNegative
    }

    let dom = 0

    for (let year = earlyDate.year + 1; year < laterDate.year; year++) {
      dom += Utils.lengthOfYear(year, earlyDate.type)
    }

    dom += earlyDate.lengthOfYear - earlyDate.dayOfYear
    dom += laterDate.dayOfYear

    return dom * isNegative
  }

  static startEndType(
    start: ILocalDate,
    end: ILocalDate
  ): [number, [ILocalDate, ILocalDate]] {
    const toS = start.type != end.type ? end.reverse() : end.copy()

    let fromDate: ILocalDate
    let toDate: ILocalDate

    let isNegative
    if (start == toS) {
      fromDate = start.copy()
      toDate = toS
      isNegative = 1
    } else if (start < toS) {
      fromDate = start.copy()
      toDate = toS
      isNegative = 1
    } else {
      fromDate = toS
      toDate = start.copy()
      isNegative = -1
    }

    return [isNegative, [fromDate, toDate]]
  }
}

export { MathHelper, Period, Utils }
