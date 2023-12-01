import {
  MonthHelper,
  DayOfWeek,
  DayOfWeekHelper,
  LocalDateType
} from '../index'

describe('MonthHelper', () => {
  test('DayOfWeek', () => {
    expect(DayOfWeek).toStrictEqual({
      MONDAY: 'MONDAY',
      TUESDAY: 'TUESDAY',
      WEDNESDAY: 'WEDNESDAY',
      THURSDAY: 'THURSDAY',
      FRIDAY: 'FRIDAY',
      SATURDAY: 'SATURDAY',
      SUNDAY: 'SUNDAY'
    })
  })

  describe('of()', () => {
    const monthHelperIns = new MonthHelper()
    describe('when param is from 1 to 11', () => {
      test('should return 2', () => {
        expect(monthHelperIns.of(2)).toBe(2)
      })
    })

    describe('when param is out from 1 to 11', () => {
      test('should throw error', () => {
        expect(() => {
          monthHelperIns.of(0)
        }).toThrow('Invalid value for MonthOfYear: 0')
      })
    })
  })

  describe('valueOf()', () => {
    describe('when param is 1', () => {
      test('should return 1', () => {
        expect(MonthHelper.valueOf(1)).toBe(1)
      })
    })
  })
})

describe('DayOfWeekHelper', () => {
  describe('of()', () => {
    describe('when param is 2', () => {
      test('should return TUESDAY', () => {
        expect(DayOfWeekHelper.of(2)).toBe('TUESDAY')
      })
    })

    describe('when param is out from 1 to 11', () => {
      test('should throw error', () => {
        expect(() => {
          DayOfWeekHelper.of(0)
        }).toThrow('Invalid value for DayOfWeek: 0')
      })
    })
  })

  describe('weekDays()', () => {
    describe('when if firstDayOfWeek === DayOfWeek.MONDAY', () => {
      test('should return array of week day starting from monday', () => {
        // eslint-disable-next-line prettier/prettier
        expect(DayOfWeekHelper.weekDays()).toEqual(["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"])
      })
    })

    describe('when if firstDayOfWeek === DayOfWeek.TUESDAY', () => {
      test('should return array of week day starting from Tuesday', () => {
        // eslint-disable-next-line prettier/prettier
        expect(DayOfWeekHelper.weekDays(DayOfWeek.TUESDAY)).toEqual(["TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "MONDAY"])
      })
    })

    describe('when if firstDayOfWeek === DayOfWeek.SATURDAY', () => {
      test('should return array of week day starting from Tuesday', () => {
        // eslint-disable-next-line prettier/prettier
        expect(DayOfWeekHelper.weekDays(DayOfWeek.SATURDAY)).toEqual(["SATURDAY", "SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"])
      })
    })

    describe('when if firstDayOfWeek === "jpt"', () => {
      test('should return array of week day starting from Tuesday', () => {
        // eslint-disable-next-line prettier/prettier
        expect(DayOfWeekHelper.weekDays(DayOfWeek.SUNDAY)).toEqual(["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"])
      })
    })
  })

  describe('plus()', () => {
    describe('when plus day is 2 and day of week is monday', () => {
      test('should return "WEDNESDAY"', () => {
        expect(DayOfWeekHelper.plus(2, DayOfWeek.MONDAY)).toEqual('WEDNESDAY')
      })
    })

    describe('when plus day is -2 and day of week is monday', () => {
      test('should return array "SATURDAY"', () => {
        expect(DayOfWeekHelper.plus(-2, DayOfWeek.MONDAY)).toEqual('SATURDAY')
      })
    })
  })

  describe('minus()', () => {
    describe('when plus day is 2 and day of week is monday', () => {
      test('should return array of week day starting from monday', () => {
        expect(DayOfWeekHelper.minus(2, DayOfWeek.MONDAY)).toEqual('SATURDAY')
      })
    })

    describe('when plus day is -2 and day of week is monday', () => {
      test('should return array of week day starting from monday', () => {
        expect(DayOfWeekHelper.plus(-2, DayOfWeek.MONDAY)).toEqual('SATURDAY')
      })
    })
  })

  describe('weekName()', () => {
    describe('day of week is monday', () => {
      test('should return array "सोम"', () => {
        expect(DayOfWeekHelper.weekName(DayOfWeek.MONDAY)).toEqual('सोम')
      })
    })

    describe('day of week is monday, Local data type is bs and short is true', () => {
      test('should return "सोम"', () => {
        expect(
          DayOfWeekHelper.weekName(DayOfWeek.MONDAY, LocalDateType.BS, true)
        ).toEqual('सोम')
      })
    })

    describe('day of week is monday, Local data type is bs and short is false', () => {
      test('should return "सोमबार"', () => {
        expect(
          DayOfWeekHelper.weekName(DayOfWeek.MONDAY, LocalDateType.BS, false)
        ).toEqual('सोमबार')
      })
    })
  })
})
