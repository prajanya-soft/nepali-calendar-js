import { LocalDateType } from './types'
import { Formatter } from './Formatter'
import { DayOfWeek } from './DayOfWeek'
import { Month } from './Month'

export class MonthHelper {
  /**
   * Private cache of all the constants.
   */
  private static ENUMS = [
    Month.JANUARY_BAISHAK,
    Month.FEBRUARY_JESTHA,
    Month.MARCH_ASADH,
    Month.APRIL_SHRWAN,
    Month.MAY_BHADRA,
    Month.JUNE_ASHWIN,
    Month.JULY_KARTIK,
    Month.AUGUST_MANGSIR,
    Month.SEPTEMBER_PAUSH,
    Month.OCTOBER_MAGH,
    Month.NOVEMBER_FALGUN,
    Month.DECEMBER_CHAITRA
  ]

  /**
   * Obtains an instance of `Month` from an `number` value.
   *
   *
   * `Month` is an enum representing the 12 months of the year.
   * This factory allows the enum to be obtained from the `number` value.
   * The `number` value follows the ISO-8601 standard, from 1 (January) to 12 (December).
   *
   * @param month  the month-of-year to represent, from 1 (January) to 12 (December)
   * @return the month-of-year, not null
   * @throws DateTimeException if the month-of-year is invalid
   */
  of(month: number): Month {
    if (month < 1 || month > 12) {
      throw Error('Invalid value for MonthOfYear: $month')
    }

    return MonthHelper.ENUMS[month - 1]
  }

  /**
   * Gets the month-of-year `number` value.
   *
   *
   * The values are numbered following the ISO-8601 standard,
   * from 1 (January) to 12 (December).
   *
   * @return the month-of-year, from 1 (January) to 12 (December)
   */
  static valueOf(month: Month): number {
    return month.valueOf()
  }

  /**
   * Returns the month-of-year that is the specified number of months after this one.
   *
   *
   * The calculation rolls around the end of the year from December to January.
   * The specified period may be negative.
   *
   *
   * This instance is immutable and unaffected by this method call.
   *
   * @param months the months to add, positive or negative
   * @param month the Month from where the addition is computed
   * @return the resulting month, not null
   */
  static plus(months: number, month: Month): Month {
    const amount = months % 12
    const ordinal = month.valueOf() - 1

    return MonthHelper.ENUMS[(ordinal + (amount + 12)) % 12]
  }

  /**
   * Returns the month-of-year that is the specified number of months before this one.
   *
   *
   * The calculation rolls around the start of the year from January to December.
   * The specified period may be negative.
   *
   *
   * This instance is immutable and unaffected by this method call.
   *
   * @param months  the months to subtract, positive or negative
   * @param month the Month from where the subtraction is computed
   * @return the resulting month, not null
   */
  static minus(months: number, month: Month): Month {
    return MonthHelper.plus(-(months % 12), month)
  }
}

export class DayOfWeekHelper {
  /**
   * Private mapping of all the dayOfWeek constants.
   */
  private static ENUMS_RECORD: Record<DayOfWeek, number> = {
    [DayOfWeek.MONDAY]: 1,
    [DayOfWeek.TUESDAY]: 2,
    [DayOfWeek.WEDNESDAY]: 3,
    [DayOfWeek.THURSDAY]: 4,
    [DayOfWeek.FRIDAY]: 5,
    [DayOfWeek.SATURDAY]: 6,
    [DayOfWeek.SUNDAY]: 7
  }

  /**
   * Private cache of all the constants.
   */
  private static ENUMS: DayOfWeek[] = Object.keys(
    DayOfWeekHelper.ENUMS_RECORD
  ) as DayOfWeek[]

  /**
   * Obtains an instance of `DayOfWeek` from an `int` value.
   *
   *
   * `DayOfWeek` is an enum representing the 7 days of the week.
   * This factory allows the enum to be obtained from the `int` value.
   * The `int` value follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday).
   *
   * @param dayOfWeek  the day-of-week to represent, from 1 (Monday) to 7 (Sunday)
   * @return the day-of-week singleton, not null
   * @throws DateTimeException if the day-of-week is invalid
   */
  static of(dayOfWeek: number): DayOfWeek {
    if (dayOfWeek < 1 || dayOfWeek > 7) {
      throw Error(`Invalid value for DayOfWeek: ${dayOfWeek}`)
    }

    return DayOfWeekHelper.ENUMS[dayOfWeek - 1]
  }

  static weekDays(
    firstDayOfWeek: DayOfWeek = DayOfWeek.SUNDAY
  ): Array<DayOfWeek> {
    let daysOfWeek = [...DayOfWeekHelper.ENUMS]
    // Order `daysOfWeek` array so that firstDayOfWeek is at index 0.
    // Only necessary if firstDayOfWeek != DayOfWeek.MONDAY which has ordinal 0.
    if (firstDayOfWeek != DayOfWeek.MONDAY) {
      const lastWeekDayValue =
        daysOfWeek.at(daysOfWeek.length - 1) ?? DayOfWeek.SATURDAY
      const rhs = daysOfWeek.slice(
        DayOfWeekHelper.ordinal(firstDayOfWeek),
        DayOfWeekHelper.ordinal(lastWeekDayValue)
      )
      const lhs = daysOfWeek.slice(0, DayOfWeekHelper.ordinal(firstDayOfWeek))
      daysOfWeek = [...rhs, ...lhs]
    }

    return daysOfWeek
  }

  /**
   * Gets the day-of-week `int` value.
   *
   *
   * The values are numbered from 0 (Monday) to 6 (Sunday).
   *
   * @return the day-of-week, from 0 (Monday) to 6 (Sunday)
   */
  static ordinal(dayOfWeek: DayOfWeek): number {
    return DayOfWeekHelper.ENUMS_RECORD[dayOfWeek] - 1
  }

  /**
   * Gets the day-of-week `int` value.
   *
   *
   * The values are numbered following the ISO-8601 standard, from 1 (Monday) to 7 (Sunday).
   *
   * @return the day-of-week, from 1 (Monday) to 7 (Sunday)
   */
  static valueOf(dayOfWeek: DayOfWeek): number {
    return DayOfWeekHelper.ENUMS_RECORD[dayOfWeek]
  }

  /**
   * Returns the day-of-week that is the specified number of days after this one.
   *
   *
   * The calculation rolls around the end of the week from Sunday to Monday.
   * The specified period may be negative.
   *
   *
   * This instance is immutable and unaffected by this method call.
   *
   * @param days  the days to add, positive or negative
   * @param dayOfWeek the DayOfWeek from where the addition is computed
   * @return the resulting day-of-week, not null
   */
  static plus(days: number, dayOfWeek: DayOfWeek): DayOfWeek {
    const amount = days % 7
    const ordinal = DayOfWeekHelper.ordinal(dayOfWeek)

    return DayOfWeekHelper.ENUMS[(ordinal + (amount + 7)) % 7]
  }

  /**
   * Returns the day-of-week that is the specified number of days before this one.
   *
   *
   * The calculation rolls around the start of the year from Monday to Sunday.
   * The specified period may be negative.
   *
   *
   * This instance is immutable and unaffected by this method call.
   *
   * @param days  the days to subtract, positive or negative
   * @param dayOfWeek the DayOfWeek from where the subtraction is computed
   * @return the resulting day-of-week, not null
   */
  static minus(days: number, dayOfWeek: DayOfWeek): DayOfWeek {
    return DayOfWeekHelper.plus(-(days % 7), dayOfWeek)
  }

  static weekName(
    dayOfWeek: DayOfWeek,
    type: LocalDateType = LocalDateType.BS,
    shortTo?: number
  ): string {
    return Formatter.weekDayName(dayOfWeek, type, shortTo)
  }
}
