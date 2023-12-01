[@prajanya-soft/nepali-calendar](../README.md) / Utils

# Class: Utils

## Table of contents

### Constructors

- [constructor](Utils.md#constructor)

### Methods

- [isLeapYear](Utils.md#isleapyear)
- [lengthOfMonth](Utils.md#lengthofmonth)
- [lengthOfYear](Utils.md#lengthofyear)
- [monthDaysAD](Utils.md#monthdaysad)
- [monthDaysBS](Utils.md#monthdaysbs)
- [validateDate](Utils.md#validatedate)

## Constructors

### constructor

• **new Utils**()

## Methods

### isLeapYear

▸ `Static` **isLeapYear**(`year`, `type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) |

#### Returns

`boolean`

___

### lengthOfMonth

▸ `Static` **lengthOfMonth**(`year`, `month`, `type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `month` | [`Month`](../enums/Month.md) |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) |

#### Returns

`number`

___

### lengthOfYear

▸ `Static` **lengthOfYear**(`year`, `type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) |

#### Returns

`number`

___

### monthDaysAD

▸ `Static` **monthDaysAD**(): `number`[]

#### Returns

`number`[]

___

### monthDaysBS

▸ `Static` **monthDaysBS**(`year`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`number`[]

___

### validateDate

▸ `Static` **validateDate**(`year`, `month`, `dayOfMonth`, `type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `month` | [`Month`](../enums/Month.md) |
| `dayOfMonth` | `number` |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) |

#### Returns

`void`
