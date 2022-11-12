[nepali-calendar-js](../README.md) / Period

# Class: Period

## Table of contents

### Constructors

- [constructor](Period.md#constructor)

### Methods

- [daysBetween](Period.md#daysbetween)
- [monthsBetween](Period.md#monthsbetween)
- [startEndType](Period.md#startendtype)
- [weeksBetween](Period.md#weeksbetween)

## Constructors

### constructor

• **new Period**()

## Methods

### daysBetween

▸ `Static` **daysBetween**(`start`, `end`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | [`ILocalDate`](ILocalDate.md) |
| `end` | [`ILocalDate`](ILocalDate.md) |

#### Returns

`number`

___

### monthsBetween

▸ `Static` **monthsBetween**(`start`, `end`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | [`ILocalDate`](ILocalDate.md) |
| `end` | [`ILocalDate`](ILocalDate.md) |

#### Returns

`number`

___

### startEndType

▸ `Static` **startEndType**(`start`, `end`): [`number`, [[`ILocalDate`](ILocalDate.md), [`ILocalDate`](ILocalDate.md)]]

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | [`ILocalDate`](ILocalDate.md) |
| `end` | [`ILocalDate`](ILocalDate.md) |

#### Returns

[`number`, [[`ILocalDate`](ILocalDate.md), [`ILocalDate`](ILocalDate.md)]]

___

### weeksBetween

▸ `Static` **weeksBetween**(`start`, `end`, `firstDayOfWeek?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | [`ILocalDate`](ILocalDate.md) | `undefined` |
| `end` | [`ILocalDate`](ILocalDate.md) | `undefined` |
| `firstDayOfWeek` | [`DayOfWeek`](../enums/DayOfWeek.md) | `DayOfWeek.SUNDAY` |

#### Returns

`number`
