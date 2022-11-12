[nepali-calendar-js](../README.md) / ILocalDate

# Class: ILocalDate

## Hierarchy

- **`ILocalDate`**

  ↳ [`ADLocalDate`](ADLocalDate.md)

  ↳ [`BSLocalDate`](BSLocalDate.md)

## Table of contents

### Properties

- [type](ILocalDate.md#type)

### Accessors

- [day](ILocalDate.md#day)
- [dayOfMonth](ILocalDate.md#dayofmonth)
- [dayOfWeek](ILocalDate.md#dayofweek)
- [dayOfYear](ILocalDate.md#dayofyear)
- [daysSinceReferenceDate](ILocalDate.md#dayssincereferencedate)
- [lengthOfMonth](ILocalDate.md#lengthofmonth)
- [lengthOfYear](ILocalDate.md#lengthofyear)
- [month](ILocalDate.md#month)
- [monthName](ILocalDate.md#monthname)
- [monthValue](ILocalDate.md#monthvalue)
- [year](ILocalDate.md#year)

### Methods

- [after](ILocalDate.md#after)
- [atDay](ILocalDate.md#atday)
- [atEndOfMonth](ILocalDate.md#atendofmonth)
- [atStartOfMonth](ILocalDate.md#atstartofmonth)
- [atStartOfYear](ILocalDate.md#atstartofyear)
- [before](ILocalDate.md#before)
- [compareTo](ILocalDate.md#compareto)
- [copy](ILocalDate.md#copy)
- [equals](ILocalDate.md#equals)
- [hashCode](ILocalDate.md#hashcode)
- [minusDays](ILocalDate.md#minusdays)
- [minusMonths](ILocalDate.md#minusmonths)
- [minusYear](ILocalDate.md#minusyear)
- [plusDays](ILocalDate.md#plusdays)
- [plusMonths](ILocalDate.md#plusmonths)
- [plusYears](ILocalDate.md#plusyears)
- [reverse](ILocalDate.md#reverse)
- [startDayOfWeek](ILocalDate.md#startdayofweek)
- [toString](ILocalDate.md#tostring)
- [convert](ILocalDate.md#convert)
- [convertToBS](ILocalDate.md#converttobs)
- [newInstance](ILocalDate.md#newinstance)
- [nowAD](ILocalDate.md#nowad)
- [nowBS](ILocalDate.md#nowbs)
- [of](ILocalDate.md#of)
- [ofAD](ILocalDate.md#ofad)
- [ofBS](ILocalDate.md#ofbs)
- [ofDate](ILocalDate.md#ofdate)

## Properties

### type

• `Abstract` **type**: [`LocalDateType`](../enums/LocalDateType.md)

#### Defined in

[ILocalDate.ts:39](https://github.com/prajanya-tech/nepali-calendar-js/blob/e146cd0/src/ILocalDate.ts#L39)

## Accessors

### day

• `get` **day**(): `number`

#### Returns

`number`

___

### dayOfMonth

• `get` **dayOfMonth**(): `number`

#### Returns

`number`

___

### dayOfWeek

• `get` **dayOfWeek**(): [`DayOfWeek`](../enums/DayOfWeek.md)

#### Returns

[`DayOfWeek`](../enums/DayOfWeek.md)

___

### dayOfYear

• `get` **dayOfYear**(): `number`

#### Returns

`number`

___

### daysSinceReferenceDate

• `get` **daysSinceReferenceDate**(): `number`

#### Returns

`number`

___

### lengthOfMonth

• `get` **lengthOfMonth**(): `number`

#### Returns

`number`

___

### lengthOfYear

• `get` **lengthOfYear**(): `number`

#### Returns

`number`

___

### month

• `get` **month**(): [`Month`](../enums/Month.md)

#### Returns

[`Month`](../enums/Month.md)

___

### monthName

• `get` **monthName**(): `string`

#### Returns

`string`

___

### monthValue

• `get` **monthValue**(): `number`

#### Returns

`number`

___

### year

• `get` **year**(): `number`

#### Returns

`number`

## Methods

### after

▸ **after**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ILocalDate`](ILocalDate.md) |

#### Returns

`boolean`

___

### atDay

▸ **atDay**(`dayOfMonth`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dayOfMonth` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### atEndOfMonth

▸ **atEndOfMonth**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### atStartOfMonth

▸ **atStartOfMonth**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### atStartOfYear

▸ **atStartOfYear**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### before

▸ **before**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ILocalDate`](ILocalDate.md) |

#### Returns

`boolean`

___

### compareTo

▸ **compareTo**(`other`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ILocalDate`](ILocalDate.md) |

#### Returns

`number`

___

### copy

▸ **copy**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### equals

▸ **equals**(`other?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other?` | `object` |

#### Returns

`boolean`

___

### hashCode

▸ **hashCode**(): `number`

#### Returns

`number`

___

### minusDays

▸ **minusDays**(`daysToSubtract`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `daysToSubtract` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### minusMonths

▸ **minusMonths**(`monthsToSubtract`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `monthsToSubtract` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### minusYear

▸ **minusYear**(`yearsToSubtract`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yearsToSubtract` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### plusDays

▸ **plusDays**(`daysToAdd`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `daysToAdd` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### plusMonths

▸ **plusMonths**(`monthsToAdd`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `monthsToAdd` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### plusYears

▸ **plusYears**(`yearsToAdd`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yearsToAdd` | `number` |

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### reverse

▸ **reverse**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### startDayOfWeek

▸ **startDayOfWeek**(): [`DayOfWeek`](../enums/DayOfWeek.md)

#### Returns

[`DayOfWeek`](../enums/DayOfWeek.md)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

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

___

### newInstance

▸ `Static` **newInstance**(`type`): [`ILocalDate`](ILocalDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) |

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### nowAD

▸ `Static` **nowAD**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

___

### nowBS

▸ `Static` **nowBS**(): [`ILocalDate`](ILocalDate.md)

#### Returns

[`ILocalDate`](ILocalDate.md)

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
