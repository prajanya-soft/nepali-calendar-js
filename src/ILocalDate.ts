import { DayOfWeek } from './DayOfWeek'
import { Month } from './Month'
import { MathHelper, Period, Utils } from './Utils'
import { LocalDateType } from './types'
import { DayOfWeekHelper, MonthHelper } from './helpers'
import { Formatter } from './Formatter'

export abstract class ILocalDate {
  /**
   * The year.
   */
  private _year: number

  get year(): number {
    return this._year
  }

  /**
   * The month-of-year.
   */
  private _month: Month

  get month(): Month {
    return this._month
  }

  /**
   * The day-of-month.
   */
  private _day: number

  get day(): number {
    return this._day
  }

  /**
   * The type of calendar.
   */
  abstract type: LocalDateType

  /**
   * Gets the day-of-month field.
   *
   *
   * This method returns the primitive `int` value for the day-of-month.
   *
   * @return the day-of-month, from 1 to 31
   */
  get dayOfMonth(): number {
    return this._day
  }

  /**
   * Gets the day-of-year field.
   *
   *
   * This method returns the primitive `int` value for the day-of-year.
   *
   * @return the day-of-year, from 1 to 365, or 366 in a leap year
   */
  get dayOfYear(): number {
    return this.firstDayOfYear() + this.day - 1
  }

  /**
   * Gets the month-of-year field from 1 to 12.
   *
   *
   * This method returns the month as an `int` from 1 to 12.
   * Application code is frequently clearer if the enum [Month]
   * is used by calling [.getMonth].
   *
   * @return the month-of-year, from 1 to 12
   */
  get monthValue(): number {
    return this.month.valueOf()
  }

  /**
   * Gets the name of month-of-year.
   *
   *
   * This method returns the month name as an `String`.
   *
   * @return the name of month-of-year
   */
  get monthName(): string {
    return Formatter.format(this, 'MM')
  }

  /**
   * Returns the length of the year.
   * <p>
   * This returns the length of the year in days, either 365 or 366.
   *
   * @return 366 if the year is leap, 365 otherwise
   */
  get lengthOfYear(): number {
    return Utils.lengthOfYear(this._year, this.type)
  }

  /**
   * Returns the length of the month, taking account of the year.
   * <p>
   * This returns the length of the month in days.
   * For example, a date in January would return 31.
   *
   * @return the length of the month in days, from 28 to 31
   */
  get lengthOfMonth(): number {
    return Utils.lengthOfMonth(this._year, this._month, this.type)
  }

  get daysSinceReferenceDate(): number {
    return Period.daysBetween(this.referenceDate(), this)
  }

  /**
   * Returns the day of week, taking account of the weekOfMonth.
   * <p>
   * This returns the day of week of current day.
   * For example, a day placed in Sunday would return 0.
   */
  get dayOfWeek(): DayOfWeek {
    const firstDayOfWeek = DayOfWeek.SUNDAY
    const daysSinceReferenceDate = this.daysSinceReferenceDate

    const weekOfMonthValue = DayOfWeekHelper.ordinal(firstDayOfWeek)
    let dayOfWeek

    if (daysSinceReferenceDate > 0) {
      dayOfWeek = ((daysSinceReferenceDate % 7) + weekOfMonthValue) % 7
    } else {
      dayOfWeek =
        (((7 - ((daysSinceReferenceDate * -1) % 7)) % 7) + weekOfMonthValue) % 7
    }

    return DayOfWeekHelper.of(dayOfWeek + 1)
  }

  get dayOfWeekValue(): number {
    return DayOfWeekHelper.valueOf(this.dayOfWeek)
  }

  protected constructor(year: number, month: Month, dayOfMonth: number) {
    this._day = dayOfMonth
    this._month = month
    this._year = year
  }

  /**
   * Returns the start week of month, taking account of the weekOfMonth.
   * <p>
   * This returns the start weekDay of current month.
   * For example, a month started with Sunday would return 0.
   *
   * @return the starting day of month
   */
  startDayOfWeek(): DayOfWeek {
    return this.atStartOfMonth().dayOfWeek
  }

  /**
   * Returns a copy of this {@code ILocalDate} with the specified number of days added.
   * <p>
   * This method adds the specified amount to the days field incrementing the
   * month and year fields as necessary to ensure the result remains valid.
   * The result is only invalid if the maximum/minimum year is exceeded.
   * <p>
   * For example, 2008-12-31 plus one day would result in 2009-01-01.
   * <p>
   * This instance is immutable and unaffected by this method call.
   *
   * @param daysToAdd  the days to add, may be negative
   * @return a {@code ILocalDate} based on this date with the days added
   */
  plusDays(daysToAdd: number): ILocalDate {
    if (daysToAdd == 0) {
      return this
    }
    const dom = this._day + daysToAdd
    let monthLen: number

    if (dom > 0) {
      if (dom <= 28) {
        return this.instance(this._year, this._month, dom)
      }

      if (dom <= 59) {
        monthLen = this.lengthOfMonth
        if (dom <= monthLen) {
          return this.instance(this._year, this._month, dom)
        }

        if (this._month < Month.DECEMBER_CHAITRA) {
          return this.instance(
            this._year,
            MonthHelper.plus(1, this._month),
            dom - monthLen
          )
        }

        return this.instance(
          this.checkValidYear(this._year + 1),
          Month.JANUARY_BAISHAK,
          dom - monthLen
        )
      }

      let dayDelta = daysToAdd
      const finalDate = this.copy()
      while (dayDelta > 0) {
        dayDelta--
        finalDate.addSingleDay()
      }

      return finalDate
    } else {
      let dayDelta = daysToAdd
      const finalDate = this.copy()
      while (dayDelta < 0) {
        dayDelta++
        finalDate.subtractSingleDay()
      }

      return finalDate
    }
  }

  /**
   * Returns a copy of this {@code ILocalDate} with the specified number of days subtracted.
   * <p>
   * This method subtracts the specified amount from the days field decrementing the
   * month and year fields as necessary to ensure the result remains valid.
   * The result is only invalid if the maximum/minimum year is exceeded.
   * <p>
   * For example, 2009-01-01 minus one day would result in 2008-12-31.
   * <p>
   * This instance is immutable and unaffected by this method call.
   *
   * @param daysToSubtract  the days to subtract, may be negative
   * @return a {@code ILocalDate} based on this date with the days subtracted
   */
  minusDays(daysToSubtract: number): ILocalDate {
    return this.plusDays(-daysToSubtract)
  }

  /**
   * Returns a copy of this {@code ILocalDate} with the specified number of months added.
   * <p>
   * This method adds the specified amount to the months field in three steps:
   * <ol>
   * <li>Add the input months to the month-of-year field</li>
   * <li>Check if the resulting date would be invalid</li>
   * <li>Adjust the day-of-month to the last valid day if necessary</li>
   * </ol>
   * <p>
   * For example, 2007-03-31 plus one month would result in the invalid date
   * 2007-04-31. Instead of returning an invalid result, the last valid day
   * of the month, 2007-04-30, is selected instead.
   * <p>
   * This instance is immutable and unaffected by this method call.
   *
   * @param monthsToAdd  the months to add, may be negative
   * @return a {@code ILocalDate} based on this date with the months added
   */
  plusMonths(monthsToAdd: number): ILocalDate {
    if (monthsToAdd == 0) {
      return this
    }
    const isNegative = monthsToAdd < 0
    const monthCount = this._year * 12 + (this.monthValue - 1)
    const calcMonths: number = monthCount + monthsToAdd // safe overflow

    const newYear = this.checkValidYear(MathHelper.floorDiv(calcMonths, 12))
    let newMonth = MathHelper.floorMod(calcMonths, 12) + 1

    const newMaxDays = Utils.lengthOfMonth(
      newYear,
      this.checkValidMonth(newMonth),
      this.type
    )
    let newDay = this._day

    if (this._day > newMaxDays) {
      newDay = this._day - newMaxDays
      newMonth = isNegative ? newMonth - 1 : newMonth + 1
    }

    return ILocalDate.of(newYear, newMonth, newDay, this.type)
  }

  /**
   * Returns a copy of this {@code ILocalDate} with the specified number of months subtracted.
   * <p>
   * This method subtracts the specified amount from the months field in three steps:
   * <ol>
   * <li>Subtract the input months from the month-of-year field</li>
   * <li>Check if the resulting date would be invalid</li>
   * <li>Adjust the day-of-month to the last valid day if necessary</li>
   * </ol>
   * <p>
   * For example, 2007-03-31 minus one month would result in the invalid date
   * 2007-02-31. Instead of returning an invalid result, the last valid day
   * of the month, 2007-02-28, is selected instead.
   * <p>
   * This instance is immutable and unaffected by this method call.
   *
   * @param monthsToSubtract  the months to subtract, may be negative
   * @return a {@code ILocalDate} based on this date with the months subtracted
   */
  minusMonths(monthsToSubtract: number): ILocalDate {
    return this.plusMonths(-monthsToSubtract)
  }

  /**
   * Returns a copy of this {@code ILocalDate} with the specified number of years added.
   * <p>
   * This method adds the specified amount to the years field in three steps:
   * <ol>
   * <li>Add the input years to the year field</li>
   * <li>Check if the resulting date would be invalid</li>
   * <li>Adjust the day-of-month to the last valid day if necessary</li>
   * </ol>
   * <p>
   * For example, 2008-02-29 (leap year) plus one year would result in the
   * invalid date 2009-02-29 (standard year). Instead of returning an invalid
   * result, the last valid day of the month, 2009-02-28, is selected instead.
   * <p>
   * This instance is immutable and unaffected by this method call.
   *
   * @param yearsToAdd  the years to add, may be negative
   * @return a {@code ILocalDate} based on this date with the years added
   */
  plusYears(yearsToAdd: number): ILocalDate {
    if (yearsToAdd == 0) {
      return this
    }

    const newYear = this.checkValidYear(this._year + yearsToAdd)
    const maxDays = Utils.lengthOfMonth(newYear, this._month, this.type)
    const newDay = this._day < maxDays ? this._day : maxDays

    return this.instance(newYear, this._month, newDay)
  }

  /**
   * Returns a copy of this {@code ILocalDate} with the specified number of years subtracted.
   * <p>
   * This method subtracts the specified amount from the years field in three steps:
   * <ol>
   * <li>Subtract the input years from the year field</li>
   * <li>Check if the resulting date would be invalid</li>
   * <li>Adjust the day-of-month to the last valid day if necessary</li>
   * </ol>
   * <p>
   * For example, 2008-02-29 (leap year) minus one year would result in the
   * invalid date 2007-02-29 (standard year). Instead of returning an invalid
   * result, the last valid day of the month, 2007-02-28, is selected instead.
   * <p>
   * This instance is immutable and unaffected by this method call.
   *
   * @param yearsToSubtract  the years to subtract, may be negative
   * @return a {@code ILocalDate} based on this date with the years subtracted
   */
  minusYear(yearsToSubtract: number): ILocalDate {
    return this.plusYears(-yearsToSubtract)
  }

  reverse(): ILocalDate {
    return ILocalDate.convert(
      this,
      this.type == LocalDateType.BS ? LocalDateType.AD : LocalDateType.BS
    )
  }

  atDay(dayOfMonth: number): ILocalDate {
    if (dayOfMonth < 1 || dayOfMonth > this.lengthOfMonth) {
      throw new Error('Invalid value for DayOfMonth: $dayOfMonth')
    }

    return this.instance(this._year, this._month, dayOfMonth)
  }

  atStartOfMonth(): ILocalDate {
    return this.instance(this._year, this._month, 1)
  }

  atStartOfYear(): ILocalDate {
    return this.instance(this._year, Month.JANUARY_BAISHAK, 1)
  }

  atEndOfMonth(): ILocalDate {
    return this.instance(this._year, this._month, this.lengthOfMonth)
  }

  /**
   * Checks if this date is before the specified date.
   * <p>
   * This checks to see if this date represents a point on the
   * local time-line before the other date.
   * <pre>
   *    const a = ILocalDate.ofBS(2077, 6, 20)
   *    const b = ILocalDate.ofBS(2077, 7, 1)
   *   a.before(b) == true
   *   a.before(a) == false
   *   b.before(a) == false
   * </pre>
   * <p>
   * This method only considers the position of the two dates on the local time-line.
   * It does not take into account the chronology, or calendar system.
   * This is different from the comparison in {@link #compareTo(ChronoLocalDate)},
   * but is the same approach as {@link ChronoLocalDate#timeLineOrder()}.
   *
   * @param other  the other date to compare to, not null
   * @return true if this date is before the specified date
   */
  before(other: ILocalDate): boolean {
    return (
      this._year < other._year ||
      (this._year <= other._year &&
        (this._month < other._month ||
          (this._month <= other._month && this._day < other._day)))
    )
  }

  /**
   * Checks if this date is after the specified date.
   * <p>
   * This checks to see if this date represents a point on the
   * local time-line after the other date.
   * <pre>
   *    const a = ILocalDate.ofBS(2077, 6, 20)
   *    const b = ILocalDate.ofBS(2077, 7, 1)
   *   a.after(b) == false
   *   a.after(a) == false
   *   b.after(a) == true
   * </pre>
   * <p>
   *
   * @param other  the other date to compare to, not null
   * @return true if this date is after the specified date
   */
  after(other: ILocalDate): boolean {
    return (
      this._year > other._year ||
      (this._year >= other._year &&
        (this._month > other._month ||
          (this._month >= other._month && this._day > other._day)))
    )
  }

  /**
   * Compares this date to another date.
   * <p>
   * The comparison is primarily based on the date, from earliest to latest.
   * It is "consistent with equals", as defined by {@link Comparable}.
   * <p>
   * If all the dates being compared are instances of {@code ILocalDate},
   * then the comparison will be entirely based on the date.
   *
   * @param other  the other date to compare to, not null
   * @return the comparator value, negative if less, positive if greater
   */
  compareTo(other: ILocalDate): number {
    let cmp = this.type == other.type ? 0 : this.compareTo(other.reverse())
    if (cmp == 0) {
      cmp = this._year - other._year
      if (cmp == 0) {
        cmp = this.monthValue - other.monthValue
        if (cmp == 0) {
          cmp = this._day - other._day
        }
      }
    }

    return cmp
  }

  /**
   * Checks if this date is equal to another date.
   * <p>
   * Compares this {@code ILocalDate} with another ensuring that the date is the same.
   * <p>
   * Only objects of type {@code ILocalDate} are compared, other types return false.
   *
   * @param other  the object to check, null returns false
   * @return true if this is equal to the other date
   */
  equals(other?: object): boolean {
    if (this === other) {
      return true
    }

    if (other instanceof ILocalDate) {
      return this.compareTo(other) == 0
    }

    return false
  }

  /**
   * A hash code for this date.
   *
   * @return a suitable hash code
   */
  hashCode(): number {
    const yearValue = this._year
    const monthValue = this.monthValue
    const dayValue = this._day

    return (
      (yearValue & -0x800) ^ ((yearValue << 11) + (monthValue << 6) + dayValue)
    )
  }

  /**
   * Outputs this date as a {@code String}, such as {@code 2007-12-03 (BS)}.
   * <p>
   * The output will be in the ISO-8601 format {@code uuuu-MM-dd}.
   *
   * @return a string representation of this date, not null
   */
  toString(): string {
    return `${this._year}-${this._month}-${this._day} (${this.type})`
  }

  copy(): ILocalDate {
    return this.instance(this._year, this._month, this._day)
  }

  protected abstract maxYear(): number

  protected abstract minYear(): number

  protected abstract firstDayOfYear(): number

  protected abstract referenceDate(): ILocalDate

  private addSingleDay(): void {
    this._day++
    if (this._day > this.lengthOfMonth) {
      this._day = 1
      const newMonth = MonthHelper.plus(1, this._month)
      if (newMonth == Month.JANUARY_BAISHAK) {
        this._year++
      }
      this._month = newMonth
    }
  }

  private subtractSingleDay(): void {
    this._day--
    if (this._day < 1) {
      const newMonth = MonthHelper.minus(1, this._month)
      if (newMonth == Month.DECEMBER_CHAITRA) {
        this._year--
      }
      this._month = newMonth
      this._day = this.lengthOfMonth
    }
  }

  private checkValidYear(year: number): number {
    return year
  }

  private checkValidMonth(month: number): Month {
    return month < Month.JANUARY_BAISHAK.valueOf() ||
      month > Month.DECEMBER_CHAITRA.valueOf()
      ? Month.JANUARY_BAISHAK
      : MonthHelper.valueOf(month)
  }

  private instance(year: number, month: Month, dayOfMonth: number): ILocalDate {
    return this.type == LocalDateType.AD
      ? new ADLocalDate(year, month, dayOfMonth)
      : new BSLocalDate(year, month, dayOfMonth)
  }

  // Static Functions
  static nowBS(): ILocalDate {
    return BSLocalDate.now()
  }

  static nowAD(): ILocalDate {
    return ADLocalDate.now()
  }

  static newInstance(type: LocalDateType): ILocalDate {
    return type == LocalDateType.AD ? ILocalDate.nowAD() : ILocalDate.nowBS()
  }

  /**
   * Obtains an instance of {@code ILocalDate} from a year, month and day.
   * <p>
   * This returns a {@code ILocalDate} with the specified year, month and day-of-month.
   * The day must be valid for the year and month, otherwise an exception will be thrown.
   *
   * @param year  the year to represent, from MIN_YEAR to MAX_YEAR
   * @param month  the month-of-year to represent, from 1 (January) to 12 (December)
   * @param dayOfMonth  the day-of-month to represent, from 1 to 31
   * @param type the type of calendar to represent by AD or BS
   * @return the local date, not null
   */
  static of(
    year: number,
    month = 1,
    dayOfMonth = 1,
    type: LocalDateType = LocalDateType.BS
  ): ILocalDate {
    return type == LocalDateType.BS
      ? ILocalDate.ofBS(year, month, dayOfMonth)
      : ILocalDate.ofAD(year, month, dayOfMonth)
  }

  static ofBS(year: number, month = 1, dayOfMonth = 1): ILocalDate {
    return new BSLocalDate(year, MonthHelper.valueOf(month), dayOfMonth)
  }

  static ofAD(year: number, month = 1, dayOfMonth = 1): ILocalDate {
    return new ADLocalDate(year, MonthHelper.valueOf(month), dayOfMonth)
  }

  static ofDate(
    calendar: Date,
    type: LocalDateType = LocalDateType.AD
  ): ILocalDate {
    switch (type) {
      case LocalDateType.AD:
        return ILocalDate.ofAD(
          calendar.getFullYear(),
          calendar.getMonth() + 1,
          calendar.getDate()
        )
      case LocalDateType.BS:
        return ILocalDate.ofDate(calendar).reverse()
    }
  }

  format(pattern: string, type?: LocalDateType): string {
    return Formatter.format(this, pattern, type ?? this.type)
  }

  static convert(date: ILocalDate, type: LocalDateType): ILocalDate {
    if (date.type == type) return date

    const iLocalDate =
      type == LocalDateType.AD
        ? ADLocalDate.REFERENCE_DATE
        : BSLocalDate.REFERENCE_DATE

    const daysToAdd = date.daysSinceReferenceDate

    return iLocalDate.plusDays(daysToAdd)
  }

  static convertToBS(
    year: number,
    month: number,
    dayOfMonth: number
  ): ILocalDate {
    return ILocalDate.of(year, month, dayOfMonth, LocalDateType.AD).reverse()
  }
}

export class ADLocalDate extends ILocalDate {
  /**
   * Constructor, previously validated.
   *
   * @param year  the year to represent, from MIN_YEAR to MAX_YEAR
   * @param month  the month-of-year to represent, not null
   * @param dayOfMonth  the day-of-month to represent, valid for year-month, from 1 to 31
   */
  constructor(year: number, month: Month, dayOfMonth: number) {
    super(year, month, dayOfMonth)
  }

  override minYear(): number {
    return -999999999
  }

  override maxYear(): number {
    return 999999999
  }

  override referenceDate(): ADLocalDate {
    return ADLocalDate.REFERENCE_DATE
  }

  override firstDayOfYear(): number {
    const leap = Utils.isLeapYear(this.year, this.type) ? 1 : 0
    switch (this.month) {
      case Month.JANUARY_BAISHAK:
        return 1
      case Month.FEBRUARY_JESTHA:
        return 32
      case Month.MARCH_ASADH:
        return 60 + leap
      case Month.APRIL_SHRWAN:
        return 91 + leap
      case Month.MAY_BHADRA:
        return 121 + leap
      case Month.JUNE_ASHWIN:
        return 152 + leap
      case Month.JULY_KARTIK:
        return 182 + leap
      case Month.AUGUST_MANGSIR:
        return 213 + leap
      case Month.SEPTEMBER_PAUSH:
        return 244 + leap
      case Month.OCTOBER_MAGH:
        return 274 + leap
      case Month.NOVEMBER_FALGUN:
        return 305 + leap
      case Month.DECEMBER_CHAITRA:
        return 335 + leap
    }
  }

  override get type(): LocalDateType {
    return LocalDateType.AD
  }

  static readonly REFERENCE_DATE = new ADLocalDate(
    2002,
    MonthHelper.valueOf(4),
    14
  )

  static now(): ILocalDate {
    const now = new Date()

    return new ADLocalDate(
      now.getFullYear(),
      MonthHelper.valueOf(now.getMonth() + 1),
      now.getDate()
    )
  }

  static readonly monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}

export class BSLocalDate extends ILocalDate {
  /**
   * Constructor, previously validated.
   *
   * @param year  the year to represent, from MIN_YEAR to MAX_YEAR
   * @param month  the month-of-year to represent, not null
   * @param dayOfMonth  the day-of-month to represent, valid for year-month, from 1 to 31
   */
  constructor(year: number, month: Month, dayOfMonth: number) {
    super(year, month, dayOfMonth)
  }

  override referenceDate(): BSLocalDate {
    return BSLocalDate.REFERENCE_DATE
  }

  override maxYear(): number {
    return 2200
  }

  override minYear(): number {
    return 1999
  }

  override firstDayOfYear(): number {
    return this.daysSum(this.month)
  }

  private daysSum(month: Month): number {
    const monthDays = BSLocalDate.monthDays(this.year)
    switch (month) {
      case Month.JANUARY_BAISHAK:
        return 1
      case Month.FEBRUARY_JESTHA:
      case Month.MARCH_ASADH:
      case Month.APRIL_SHRWAN:
      case Month.MAY_BHADRA:
      case Month.JUNE_ASHWIN:
      case Month.JULY_KARTIK:
      case Month.AUGUST_MANGSIR:
      case Month.SEPTEMBER_PAUSH:
      case Month.OCTOBER_MAGH:
      case Month.NOVEMBER_FALGUN:
      case Month.DECEMBER_CHAITRA:
        return this.daysSum(month - 1) + monthDays[month.valueOf() - 2]
    }
  }

  override get type(): LocalDateType {
    return LocalDateType.BS
  }

  static readonly yearMonthSpanLookupTable = [
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 29, 30, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 29, 30, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
    [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
    [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30],
    [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 31]
  ]

  static readonly REFERENCE_DATE = new BSLocalDate(
    2059,
    Month.JANUARY_BAISHAK,
    1
  )

  static now(): ILocalDate {
    return ADLocalDate.now().reverse()
  }

  static monthDays(year: number): number[] {
    return BSLocalDate.yearMonthSpanLookupTable[BSLocalDate.yearIndex(year)]
  }

  static yearIndex(year: number): number {
    const index = (year - 1999) % 100

    return index < 0 ? index * -1 : index
  }
}
