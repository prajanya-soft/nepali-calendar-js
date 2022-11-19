import { Formatter, ILocalDate, LocalDateType, Period, Utils } from '../index'

function dateDiff(first: Date, second: Date): number {
  const diff = second.valueOf() - first.valueOf()

  return Math.floor(diff / 86400000)
}

function monthDiff(d1: Date, d2: Date): number {
  let months
  months = (d2.getFullYear() - d1.getFullYear()) * 12
  months -= d1.getMonth()
  months += d2.getMonth()

  return months <= 0 ? 0 : months
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Date.prototype.isLeapYear = function () {
  const year = this.getFullYear()
  if ((year & 3) != 0) return false

  return year % 100 != 0 || year % 400 == 0
}

// Get Day of Year
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Date.prototype.getDOY = function () {
  const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
  const mn = this.getMonth()
  const dn = this.getDate()
  let dayOfYear = dayCount[mn] + dn
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (mn > 1 && this.isLeapYear()) dayOfYear++

  return dayOfYear
}

describe('ILocalDate', () => {
  test(`monthsBetween`, () => {
    const start = ILocalDate.ofAD(2018, 9, 1)
    const end = ILocalDate.ofAD(2022, 4, 1)

    const s = new Date(2018, 9, 1)
    const e = new Date(2022, 4, 1)

    expect(Period.monthsBetween(start, end)).toStrictEqual(monthDiff(s, e))
    expect(Period.monthsBetween(end, start)).toStrictEqual(monthDiff(s, e) * -1)
  })

  test(`daysBetween AD`, () => {
    const start = ILocalDate.ofAD(2018, 9, 1)
    const end = ILocalDate.ofAD(2022, 4, 1)

    const s = new Date(2018, 9, 1)
    const e = new Date(2022, 4, 1)

    expect(Period.daysBetween(start, end)).toStrictEqual(dateDiff(s, e))
    expect(Period.daysBetween(end, start)).toStrictEqual(dateDiff(s, e) * -1)
  })

  test(`daysBetween BS`, () => {
    const start = ILocalDate.ofBS(2078, 1, 1)
    const end = ILocalDate.ofBS(2079, 1, 1)

    expect(Period.daysBetween(start, end)).toStrictEqual(365)
    expect(Period.daysBetween(end, start)).toStrictEqual(365 * -1)
  })

  test(`firstDayOfYear`, () => {
    const today = ILocalDate.ofAD(2020, 2, 22)

    const subMonth = Utils.monthDaysAD()
      .slice(0, today.monthValue - 1)
      .reduce((a, b) => a + b, 0)
    expect(today.dayOfYear).toStrictEqual(subMonth + today.dayOfMonth)

    const javaToday = new Date(2020, 1 /* JS Date month range is 0-11 */, 22)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(today.dayOfYear).toStrictEqual(javaToday.getDOY())

    const todayBs = ILocalDate.nowBS()
    const subMonthBS = Utils.monthDaysBS(todayBs.year)
      .slice(0, todayBs.monthValue - 1)
      .reduce((a, b) => a + b, 0)
    expect(todayBs.dayOfYear).toStrictEqual(subMonthBS + todayBs.dayOfMonth)
  })

  test('DayOfWeekWith Date', () => {
    const today = new Date()

    expect(ILocalDate.nowAD().dayOfWeekValue).toStrictEqual(today.getDay())
    expect(ILocalDate.nowBS().dayOfWeekValue).toStrictEqual(today.getDay())
  })

  test('addAndRemoveDays', () => {
    const date = ILocalDate.nowAD()
    const changed = date.plusDays(100).minusDays(100)
    expect(date.year).toStrictEqual(changed.year)
    expect(date.month).toStrictEqual(changed.month)
    expect(date.dayOfMonth).toStrictEqual(changed.dayOfMonth)
  })

  test('reverse', () => {
    const date = ILocalDate.nowAD()
    const reversed = date.reverse().reverse()
    expect(date.year).toStrictEqual(reversed.year)
    expect(date.month).toStrictEqual(reversed.month)
    expect(date.dayOfMonth).toStrictEqual(reversed.dayOfMonth)
  })

  test(`BS Date Formatter`, () => {
    const date = ILocalDate.ofBS(2078, 1, 1)
    expect(Formatter.format(date, 'd')).toStrictEqual('०१')
    expect(Formatter.format(date, 'MMM')).toStrictEqual('बैशाख')
    expect(Formatter.format(date, 'MMMM')).toStrictEqual('बैशाख')
    expect(Formatter.format(date, 'EEE')).toStrictEqual('बुध')
    expect(Formatter.format(date, 'EEEE')).toStrictEqual('बुधबार')
    expect(Formatter.format(date, 'yyyy-MM-dd')).toStrictEqual('२०७८-०१-०१')
    expect(
      Formatter.format(date, 'yyyy-MM-dd', LocalDateType.AD)
    ).toStrictEqual('2078-01-01')
  })

  test(`AD Date Formatter`, () => {
    const date = ILocalDate.ofAD(2021, 1, 1)
    expect(Formatter.format(date, 'd')).toStrictEqual('01')
    expect(Formatter.format(date, 'MMM')).toStrictEqual('Jan')
    expect(Formatter.format(date, 'MMMM')).toStrictEqual('January')
    expect(Formatter.format(date, 'EEE')).toStrictEqual('Fri')
    expect(Formatter.format(date, 'EEEE')).toStrictEqual('Friday')
    expect(Formatter.format(date, 'yyyy-MM-dd')).toStrictEqual('2021-01-01')
    expect(
      Formatter.format(date, 'yyyy-MM-dd', LocalDateType.BS)
    ).toStrictEqual('२०२१-०१-०१')
  })

  test('Convert ILocaleDate.of', () => {
    const ad = ILocalDate.ofDate(
      new Date(2021, 0 /* Date month ranges are 0-11  */, 1)
    )

    expect(ad.year).toStrictEqual(2021)
    expect(ad.monthValue).toStrictEqual(1)
    expect(ad.dayOfMonth).toStrictEqual(1)

    const bs = ad.reverse()
    expect(bs.year).toStrictEqual(2077)
    expect(bs.monthValue).toStrictEqual(9)
    expect(bs.dayOfMonth).toStrictEqual(17)
  })

  test('ILocalDate of with date and Type BS', () => {
    const date = new Date(2021, 0 /* Date month ranges are 0-11  */, 1)
    const bs = ILocalDate.ofDate(date, LocalDateType.BS)

    expect(bs.year).toStrictEqual(2077)
    expect(bs.monthValue).toStrictEqual(9)
    expect(bs.dayOfMonth).toStrictEqual(17)
  })
  test('Convert AD Type to BS', () => {
    const nowBS = ILocalDate.nowBS()

    const bsDateByReverse = ILocalDate.nowAD().reverse()

    expect(bsDateByReverse).toStrictEqual(nowBS)

    const bsDateFromAdILocalDate = ILocalDate.convert(
      ILocalDate.nowAD(),
      LocalDateType.BS
    )

    expect(bsDateFromAdILocalDate).toStrictEqual(nowBS)

    const bsDateFromYearMonthDay = ILocalDate.convertToBS(2021, 9, 6)

    expect(bsDateFromYearMonthDay.year).toStrictEqual(2078)
    expect(bsDateFromYearMonthDay.monthValue).toStrictEqual(5)
    expect(bsDateFromYearMonthDay.dayOfMonth).toStrictEqual(21)
  })

  test('Convert BS Type to AD', () => {
    const nowAD = ILocalDate.nowAD()

    const adDateByReverse = ILocalDate.nowBS().reverse()

    expect(adDateByReverse).toStrictEqual(nowAD)

    const adDateFromAdILocalDate = ILocalDate.convert(
      ILocalDate.nowBS(),
      LocalDateType.AD
    )

    expect(adDateFromAdILocalDate).toStrictEqual(nowAD)
  })
})
