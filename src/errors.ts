import type { Month } from './Month'

export class InvalidMonth extends Error {
  constructor(month: Month) {
    super(`Invalid month provided: ${month}`)
  }
}

export class InvalidDayOfMonth extends Error {
  constructor(dayOfMonth: number) {
    super(`Invalid dayOfMonth provided:${dayOfMonth}`)
  }
}
