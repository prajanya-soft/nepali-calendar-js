[nepali-calendar-js](../README.md) / DayOfWeekHelper

# Class: DayOfWeekHelper

## Table of contents

### Constructors

- [constructor](DayOfWeekHelper.md#constructor)

### Methods

- [minus](DayOfWeekHelper.md#minus)
- [of](DayOfWeekHelper.md#of)
- [ordinal](DayOfWeekHelper.md#ordinal)
- [plus](DayOfWeekHelper.md#plus)
- [valueOf](DayOfWeekHelper.md#valueof)
- [weekDays](DayOfWeekHelper.md#weekdays)
- [weekName](DayOfWeekHelper.md#weekname)

## Constructors

### constructor

• **new DayOfWeekHelper**()

## Methods

### minus

▸ `Static` **minus**(`days`, `dayOfWeek`): [`DayOfWeek`](../enums/DayOfWeek.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `days` | `number` |
| `dayOfWeek` | [`DayOfWeek`](../enums/DayOfWeek.md) |

#### Returns

[`DayOfWeek`](../enums/DayOfWeek.md)

___

### of

▸ `Static` **of**(`dayOfWeek`): [`DayOfWeek`](../enums/DayOfWeek.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dayOfWeek` | `number` |

#### Returns

[`DayOfWeek`](../enums/DayOfWeek.md)

___

### ordinal

▸ `Static` **ordinal**(`dayOfWeek`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dayOfWeek` | [`DayOfWeek`](../enums/DayOfWeek.md) |

#### Returns

`number`

___

### plus

▸ `Static` **plus**(`days`, `dayOfWeek`): [`DayOfWeek`](../enums/DayOfWeek.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `days` | `number` |
| `dayOfWeek` | [`DayOfWeek`](../enums/DayOfWeek.md) |

#### Returns

[`DayOfWeek`](../enums/DayOfWeek.md)

___

### valueOf

▸ `Static` **valueOf**(`dayOfWeek`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dayOfWeek` | [`DayOfWeek`](../enums/DayOfWeek.md) |

#### Returns

`number`

___

### weekDays

▸ `Static` **weekDays**(`firstDayOfWeek?`): [`DayOfWeek`](../enums/DayOfWeek.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `firstDayOfWeek` | [`DayOfWeek`](../enums/DayOfWeek.md) | `DayOfWeek.SUNDAY` |

#### Returns

[`DayOfWeek`](../enums/DayOfWeek.md)[]

___

### weekName

▸ `Static` **weekName**(`dayOfWeek`, `type?`, `short?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dayOfWeek` | [`DayOfWeek`](../enums/DayOfWeek.md) | `undefined` |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) | `LocalDateType.BS` |
| `short` | `boolean` | `true` |

#### Returns

`string`
