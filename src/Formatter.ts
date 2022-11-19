import { DayOfWeek } from './DayOfWeek'
import { Month } from './Month'
import type { ILocalDate } from './ILocalDate'
import { LocalDateType } from './types'

class Formatter {
  private static npNumberChars: Record<number, string> = {
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
    0: '०'
  }

  private static bsMonths: Record<number, string> = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }

  private static npMonths: Record<number, string> = {
    1: 'बैशाख',
    2: 'जेठ',
    3: 'असार',
    4: 'श्रावण',
    5: 'भदौ',
    6: 'आश्विन',
    7: 'कार्तिक',
    8: 'मंसिर',
    9: 'पुष',
    10: 'माघ',
    11: 'फाल्गुन',
    12: 'चैत्र'
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private static _npWeekDays: Record<number, string> = {
    1: 'सोमबार',
    2: 'मंगलबार',
    3: 'बुधबार',
    4: 'बिहिबार',
    5: 'शुक्रबार',
    6: 'शनिबार',
    7: 'आइतबार'
  }

  private static npWeekDays: Record<DayOfWeek, string> = {
    [DayOfWeek.SUNDAY]: 'आइतबार',
    [DayOfWeek.MONDAY]: 'सोमबार',
    [DayOfWeek.TUESDAY]: 'मंगलबार',
    [DayOfWeek.WEDNESDAY]: 'बुधबार',
    [DayOfWeek.THURSDAY]: 'बिहिबार',
    [DayOfWeek.FRIDAY]: 'शुक्रबार',
    [DayOfWeek.SATURDAY]: 'शनिबार'
  }

  static monthName(month: Month, type: LocalDateType, short = true): string {
    if (type == LocalDateType.BS) {
      return Formatter.npMonths[month.valueOf()]
    } else {
      if (short) {
        return Formatter.bsMonths[month.valueOf()]?.substring(0, 3)
      } else {
        return Formatter.bsMonths[month.valueOf()]
      }
    }

    return ''
  }

  static monthCharacter(month: Month, type: LocalDateType): string {
    if (type == LocalDateType.AD) {
      return month.valueOf().toString().padStart(2, '0')
    } else {
      return Formatter.getNpCharacter(month.valueOf()).padStart(
        2,
        Formatter.npNumberChars[0] ?? ' '
      )
    }
  }

  static weekDayName(
    dayOfWeek: DayOfWeek,
    type: LocalDateType,
    short = true
  ): string {
    let name

    if (type == LocalDateType.BS) {
      name = Formatter.npWeekDays[dayOfWeek]
    } else {
      name = DayOfWeek[dayOfWeek].toString().toLowerCase()
      name = name.substring(0, 1).toUpperCase() + name.substring(1, name.length)
    }

    return short ? name.substring(0, 3) : name
  }

  static getNpCharacter(number: number, prefix = ''): string {
    if (number >= 10) {
      return Formatter.getNpCharacter(
        Math.trunc(number / 10),
        Formatter.getNpCharacter(number % 10) + prefix
      )
    }

    return Formatter.npNumberChars[number].toString() + prefix
  }

  static dayName(day: number, type: LocalDateType): string {
    return type == LocalDateType.AD
      ? day.toString().padStart(2, '0')
      : Formatter.getNpCharacter(day).padStart(
          2,
          Formatter.npNumberChars[0] ?? '0'
        )
  }

  static yearName(year: number, type: LocalDateType): string {
    return type == LocalDateType.AD
      ? year.toString()
      : Formatter.getNpCharacter(year)
  }

  static format(
    date: ILocalDate,
    pattern: string,
    type?: LocalDateType
  ): string {
    return pattern.replace(
      RegExp('yyyy|MMMM|MMM|MM|EEEE|EEE|dd|d|hh|HH|mm|ss|a'),
      (matched) => {
        const formatType = type ?? date.type
        switch (matched) {
          case 'yyyy':
            return Formatter.yearName(date.year, formatType)
          case 'MMMM':
            return Formatter.monthName(date.month, formatType, false)
          case 'MMM':
            return Formatter.monthName(date.month, formatType, true)
          case 'MM':
            return Formatter.monthCharacter(date.month, formatType)
          case 'EEEE':
            return Formatter.weekDayName(date.dayOfWeek, formatType, false)
          case 'EEE':
            return Formatter.weekDayName(date.dayOfWeek, formatType, true)
          case 'dd':
            return Formatter.dayName(date.dayOfMonth, formatType)
          case 'd':
            return Formatter.dayName(date.dayOfMonth, formatType)
          default:
            return ''
        }
      }
    )
  }
}

export { Formatter }
