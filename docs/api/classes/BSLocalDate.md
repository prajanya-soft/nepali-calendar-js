[@prajanya-soft/nepali-calendar](../README.md) / BSLocalDate

# Class: BSLocalDate

## Hierarchy

- [`ILocalDate`](ILocalDate.md)

  ↳ **`BSLocalDate`**

## Table of contents

### Constructors

- [constructor](BSLocalDate.md#constructor)

### Properties

- [REFERENCE\_DATE](BSLocalDate.md#reference_date)
- [yearMonthSpanLookupTable](BSLocalDate.md#yearmonthspanlookuptable)

### Accessors

- [day](BSLocalDate.md#day)
- [dayOfMonth](BSLocalDate.md#dayofmonth)
- [dayOfWeek](BSLocalDate.md#dayofweek)
- [dayOfWeekValue](BSLocalDate.md#dayofweekvalue)
- [dayOfYear](BSLocalDate.md#dayofyear)
- [daysSinceReferenceDate](BSLocalDate.md#dayssincereferencedate)
- [lengthOfMonth](BSLocalDate.md#lengthofmonth)
- [lengthOfYear](BSLocalDate.md#lengthofyear)
- [month](BSLocalDate.md#month)
- [monthName](BSLocalDate.md#monthname)
- [monthValue](BSLocalDate.md#monthvalue)
- [type](BSLocalDate.md#type)
- [year](BSLocalDate.md#year)

### Methods

- [after](BSLocalDate.md#after)
- [atDay](BSLocalDate.md#atday)
- [atEndOfMonth](BSLocalDate.md#atendofmonth)
- [atStartOfMonth](BSLocalDate.md#atstartofmonth)
- [atStartOfYear](BSLocalDate.md#atstartofyear)
- [before](BSLocalDate.md#before)
- [compareTo](BSLocalDate.md#compareto)
- [copy](BSLocalDate.md#copy)
- [equals](BSLocalDate.md#equals)
- [firstDayOfYear](BSLocalDate.md#firstdayofyear)
- [format](BSLocalDate.md#format)
- [hashCode](BSLocalDate.md#hashcode)
- [maxYear](BSLocalDate.md#maxyear)
- [minYear](BSLocalDate.md#minyear)
- [minusDays](BSLocalDate.md#minusdays)
- [minusMonths](BSLocalDate.md#minusmonths)
- [minusYear](BSLocalDate.md#minusyear)
- [plusDays](BSLocalDate.md#plusdays)
- [plusMonths](BSLocalDate.md#plusmonths)
- [plusYears](BSLocalDate.md#plusyears)
- [referenceDate](BSLocalDate.md#referencedate)
- [reverse](BSLocalDate.md#reverse)
- [startDayOfWeek](BSLocalDate.md#startdayofweek)
- [toString](BSLocalDate.md#tostring)
- [convert](BSLocalDate.md#convert)
- [convertToBS](BSLocalDate.md#converttobs)
- [monthDays](BSLocalDate.md#monthdays)
- [newInstance](BSLocalDate.md#newinstance)
- [now](BSLocalDate.md#now)
- [nowAD](BSLocalDate.md#nowad)
- [nowBS](BSLocalDate.md#nowbs)
- [of](BSLocalDate.md#of)
- [ofAD](BSLocalDate.md#ofad)
- [ofBS](BSLocalDate.md#ofbs)
- [ofDate](BSLocalDate.md#ofdate)
- [yearIndex](BSLocalDate.md#yearindex)

## Constructors

### constructor

• **new BSLocalDate**(`year`, `month`, `dayOfMonth`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `month` | [`Month`](../enums/Month.md) |
| `dayOfMonth` | `number` |

#### Overrides

ILocalDate.constructor

## Properties

### REFERENCE\_DATE

▪ `Static` `Readonly` **REFERENCE\_DATE**: [`BSLocalDate`](BSLocalDate.md)

#### Defined in

[src/ILocalDate.ts:991](https://github.com/prajanya-soft/nepali-calendar-js/blob/a2c1c38/src/ILocalDate.ts#L991)

___

### yearMonthSpanLookupTable

▪ `Static` `Readonly` **yearMonthSpanLookupTable**: `number`[][]

#### Defined in

[src/ILocalDate.ts:887](https://github.com/prajanya-soft/nepali-calendar-js/blob/a2c1c38/src/ILocalDate.ts#L887)

## Accessors

### day

• `get` **day**(): `number`

#### Returns

`number`

#### Inherited from

ILocalDate.day

___

### dayOfMonth

• `get` **dayOfMonth**(): `number`

#### Returns

`number`

#### Inherited from

ILocalDate.dayOfMonth

___

### dayOfWeek

• `get` **dayOfWeek**(): [`DayOfWeek`](../enums/DayOfWeek.md)

#### Returns

[`DayOfWeek`](../enums/DayOfWeek.md)

#### Inherited from

ILocalDate.dayOfWeek

___

### dayOfWeekValue

• `get` **dayOfWeekValue**(): `number`

#### Returns

`number`

#### Inherited from

ILocalDate.dayOfWeekValue

___

### dayOfYear

• `get` **dayOfYear**(): `number`

#### Returns

`number`

#### Inherited from

ILocalDate.dayOfYear

___

### daysSinceReferenceDate

• `get` **daysSinceReferenceDate**(): `number`

#### Returns

`number`

#### Inherited from

ILocalDate.daysSinceReferenceDate

___

### lengthOfMonth

• `get` **lengthOfMonth**(): `number`

#### Returns

`number`

#### Inherited from

ILocalDate.lengthOfMonth

___

### lengthOfYear

• `get` **lengthOfYear**(): `number`

#### Returns

`number`

#### Inherited from

ILocalDate.lengthOfYear

___

### month

• `get` **month**(): [`Month`](../enums/Month.md)

#### Returns

[`Month`](../enums/Month.md)

#### Inherited from

ILocalDate.month

___

### monthName

• `get` **monthName**(): `string`

#### Returns

`string`

#### Inherited from

ILocalDate.monthName

___

### monthValue

• `get` **monthValue**(): `number`

#### Returns

`number`

#### Inherited from

ILocalDate.monthValue

___

### type

• `get` **type**(): [`LocalDateType`](../enums/LocalDateType.md)

#### Returns

[`LocalDateType`](../enums/LocalDateType.md)

#### Overrides

ILocalDate.type

___

### year

• `get` **year**(): `number`

#### Returns

`number`

#### Inherited from

ILocalDate.year

## Methods

### after

▸ **after**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ILocalDate`](ILocalDate.md) |

#### Returns

`boolean`

#### Inherited from

[ILocalDate](ILocalDate.md).[after](ILocalDate.md#after)

___

### atDay

▸ **atDay**(`dayOfMonth`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dayOfMonth` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[atDay](ILocalDate.md#atday)

___

### atEndOfMonth

▸ **atEndOfMonth**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[atEndOfMonth](ILocalDate.md#atendofmonth)

___

### atStartOfMonth

▸ **atStartOfMonth**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[atStartOfMonth](ILocalDate.md#atstartofmonth)

___

### atStartOfYear

▸ **atStartOfYear**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[atStartOfYear](ILocalDate.md#atstartofyear)

___

### before

▸ **before**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ILocalDate`](ILocalDate.md) |

#### Returns

`boolean`

#### Inherited from

[ILocalDate](ILocalDate.md).[before](ILocalDate.md#before)

___

### compareTo

▸ **compareTo**(`other`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ILocalDate`](ILocalDate.md) |

#### Returns

`number`

#### Inherited from

[ILocalDate](ILocalDate.md).[compareTo](ILocalDate.md#compareto)

___

### copy

▸ **copy**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[copy](ILocalDate.md#copy)

___

### equals

▸ **equals**(`other?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other?` | `object` |

#### Returns

`boolean`

#### Inherited from

[ILocalDate](ILocalDate.md).[equals](ILocalDate.md#equals)

___

### firstDayOfYear

▸ **firstDayOfYear**(): `number`

#### Returns

`number`

#### Overrides

ILocalDate.firstDayOfYear

___

### format

▸ **format**(`pattern`, `type?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `type?` | [`LocalDateType`](../enums/LocalDateType.md) |

#### Returns

`string`

#### Inherited from

[ILocalDate](ILocalDate.md).[format](ILocalDate.md#format)

___

### hashCode

▸ **hashCode**(): `number`

#### Returns

`number`

#### Inherited from

[ILocalDate](ILocalDate.md).[hashCode](ILocalDate.md#hashcode)

___

### maxYear

▸ **maxYear**(): `number`

#### Returns

`number`

#### Overrides

ILocalDate.maxYear

___

### minYear

▸ **minYear**(): `number`

#### Returns

`number`

#### Overrides

ILocalDate.minYear

___

### minusDays

▸ **minusDays**(`daysToSubtract`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `daysToSubtract` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[minusDays](ILocalDate.md#minusdays)

___

### minusMonths

▸ **minusMonths**(`monthsToSubtract`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `monthsToSubtract` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[minusMonths](ILocalDate.md#minusmonths)

___

### minusYear

▸ **minusYear**(`yearsToSubtract`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yearsToSubtract` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[minusYear](ILocalDate.md#minusyear)

___

### plusDays

▸ **plusDays**(`daysToAdd`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `daysToAdd` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[plusDays](ILocalDate.md#plusdays)

___

### plusMonths

▸ **plusMonths**(`monthsToAdd`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `monthsToAdd` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[plusMonths](ILocalDate.md#plusmonths)

___

### plusYears

▸ **plusYears**(`yearsToAdd`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yearsToAdd` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[plusYears](ILocalDate.md#plusyears)

___

### referenceDate

▸ **referenceDate**(): [`BSLocalDate`](BSLocalDate.md)

#### Returns

[`BSLocalDate`](BSLocalDate.md)

#### Overrides

ILocalDate.referenceDate

___

### reverse

▸ **reverse**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[reverse](ILocalDate.md#reverse)

___

### startDayOfWeek

▸ **startDayOfWeek**(): [`DayOfWeek`](../enums/DayOfWeek.md)

#### Returns

[`DayOfWeek`](../enums/DayOfWeek.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[startDayOfWeek](ILocalDate.md#startdayofweek)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[ILocalDate](ILocalDate.md).[toString](ILocalDate.md#tostring)

___

### convert

▸ `Static` **convert**(`date`, `type`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | [`ILocalDate`](ILocalDate.md) |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[convert](ILocalDate.md#convert)

___

### convertToBS

▸ `Static` **convertToBS**(`year`, `month`, `dayOfMonth`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `month` | `number` |
| `dayOfMonth` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[convertToBS](ILocalDate.md#converttobs)

___

### monthDays

▸ `Static` **monthDays**(`year`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`number`[]

___

### newInstance

▸ `Static` **newInstance**(`type`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[newInstance](ILocalDate.md#newinstance)

___

### now

▸ `Static` **now**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### nowAD

▸ `Static` **nowAD**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[nowAD](ILocalDate.md#nowad)

___

### nowBS

▸ `Static` **nowBS**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[nowBS](ILocalDate.md#nowbs)

___

### of

▸ `Static` **of**(`year`, `month?`, `dayOfMonth?`, `type?`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `year` | `number` | `undefined` |
| `month` | `number` | `1` |
| `dayOfMonth` | `number` | `1` |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) | `LocalDateType.BS` |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[of](ILocalDate.md#of)

___

### ofAD

▸ `Static` **ofAD**(`year`, `month?`, `dayOfMonth?`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `year` | `number` | `undefined` |
| `month` | `number` | `1` |
| `dayOfMonth` | `number` | `1` |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[ofAD](ILocalDate.md#ofad)

___

### ofBS

▸ `Static` **ofBS**(`year`, `month?`, `dayOfMonth?`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `year` | `number` | `undefined` |
| `month` | `number` | `1` |
| `dayOfMonth` | `number` | `1` |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[ofBS](ILocalDate.md#ofbs)

___

### ofDate

▸ `Static` **ofDate**(`calendar`, `type?`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `calendar` | `Date` | `undefined` |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) | `LocalDateType.AD` |

#### Returns

[`ILocalDate`](ILocalDate.md)

#### Inherited from

[ILocalDate](ILocalDate.md).[ofDate](ILocalDate.md#ofdate)

___

### yearIndex

▸ `Static` **yearIndex**(`year`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`number`
