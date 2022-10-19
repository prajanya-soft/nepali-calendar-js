import { ILocalDate, Period } from '../index'

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

  test(`dateConversion`, () => {
    const bsDate = ILocalDate.ofBS(2089, 7, 2)

    const adDate = bsDate.reverse()

    console.log(adDate)
  })
})
