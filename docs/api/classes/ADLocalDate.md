[nepali-calendar-js](../README.md) / ADLocalDate

# Class: ADLocalDate

## Hierarchy

- [`ILocalDate`](ILocalDate.md)

  ↳ **`ADLocalDate`**

## Table of contents

### Constructors

- [constructor](ADLocalDate.md#constructor)

### Properties

- [REFERENCE\_DATE](ADLocalDate.md#reference_date)
- [monthDays](ADLocalDate.md#monthdays)

### Accessors

- [day](ADLocalDate.md#day)
- [dayOfMonth](ADLocalDate.md#dayofmonth)
- [dayOfWeek](ADLocalDate.md#dayofweek)
- [dayOfWeekValue](ADLocalDate.md#dayofweekvalue)
- [dayOfYear](ADLocalDate.md#dayofyear)
- [daysSinceReferenceDate](ADLocalDate.md#dayssincereferencedate)
- [lengthOfMonth](ADLocalDate.md#lengthofmonth)
- [lengthOfYear](ADLocalDate.md#lengthofyear)
- [month](ADLocalDate.md#month)
- [monthName](ADLocalDate.md#monthname)
- [monthValue](ADLocalDate.md#monthvalue)
- [type](ADLocalDate.md#type)
- [year](ADLocalDate.md#year)

### Methods

- [after](ADLocalDate.md#after)
- [atDay](ADLocalDate.md#atday)
- [atEndOfMonth](ADLocalDate.md#atendofmonth)
- [atStartOfMonth](ADLocalDate.md#atstartofmonth)
- [atStartOfYear](ADLocalDate.md#atstartofyear)
- [before](ADLocalDate.md#before)
- [compareTo](ADLocalDate.md#compareto)
- [copy](ADLocalDate.md#copy)
- [equals](ADLocalDate.md#equals)
- [firstDayOfYear](ADLocalDate.md#firstdayofyear)
- [hashCode](ADLocalDate.md#hashcode)
- [maxYear](ADLocalDate.md#maxyear)
- [minYear](ADLocalDate.md#minyear)
- [minusDays](ADLocalDate.md#minusdays)
- [minusMonths](ADLocalDate.md#minusmonths)
- [minusYear](ADLocalDate.md#minusyear)
- [plusDays](ADLocalDate.md#plusdays)
- [plusMonths](ADLocalDate.md#plusmonths)
- [plusYears](ADLocalDate.md#plusyears)
- [referenceDate](ADLocalDate.md#referencedate)
- [reverse](ADLocalDate.md#reverse)
- [startDayOfWeek](ADLocalDate.md#startdayofweek)
- [toString](ADLocalDate.md#tostring)
- [convert](ADLocalDate.md#convert)
- [convertToBS](ADLocalDate.md#converttobs)
- [newInstance](ADLocalDate.md#newinstance)
- [now](ADLocalDate.md#now)
- [nowAD](ADLocalDate.md#nowad)
- [nowBS](ADLocalDate.md#nowbs)
- [of](ADLocalDate.md#of)
- [ofAD](ADLocalDate.md#ofad)
- [ofBS](ADLocalDate.md#ofbs)
- [ofDate](ADLocalDate.md#ofdate)

## Constructors

### constructor

• **new ADLocalDate**(`year`, `month`, `dayOfMonth`)

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

▪ `Static` `Readonly` **REFERENCE\_DATE**: [`ADLocalDate`](ADLocalDate.md)

#### Defined in

[ILocalDate.ts:721](https://github.com/prajanya-tech/nepali-calendar-js/blob/6af0828/src/ILocalDate.ts#L721)

___

### monthDays

▪ `Static` `Readonly` **monthDays**: `number`[]

#### Defined in

[ILocalDate.ts:737](https://github.com/prajanya-tech/nepali-calendar-js/blob/6af0828/src/ILocalDate.ts#L737)

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

▸ **referenceDate**(): [`ADLocalDate`](ADLocalDate.md)

#### Returns

[`ADLocalDate`](ADLocalDate.md)

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
