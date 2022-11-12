import { ILocalDate, Period, Utils } from '../index'

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
})
