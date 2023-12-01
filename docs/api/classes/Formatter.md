[@prajanya-soft/nepali-calendar](../README.md) / Formatter

# Class: Formatter

## Table of contents

### Constructors

- [constructor](Formatter.md#constructor)

### Methods

- [dayName](Formatter.md#dayname)
- [format](Formatter.md#format)
- [getNpCharacter](Formatter.md#getnpcharacter)
- [monthCharacter](Formatter.md#monthcharacter)
- [monthName](Formatter.md#monthname)
- [weekDayName](Formatter.md#weekdayname)
- [yearName](Formatter.md#yearname)

## Constructors

### constructor

• **new Formatter**()

## Methods

### dayName

▸ `Static` **dayName**(`day`, `type`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `day` | `number` |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) |

#### Returns

`string`

___

### format

▸ `Static` **format**(`date`, `pattern`, `type?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | [`ILocalDate`](ILocalDate.md) |
| `pattern` | `string` |
| `type?` | [`LocalDateType`](../enums/LocalDateType.md) |

#### Returns

`string`

___

### getNpCharacter

▸ `Static` **getNpCharacter**(`number`, `prefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `number` | `number` | `undefined` |
| `prefix` | `string` | `''` |

#### Returns

`string`

___

### monthCharacter

▸ `Static` **monthCharacter**(`month`, `type`, `short?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `month` | [`Month`](../enums/Month.md) | `undefined` |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) | `undefined` |
| `short` | `boolean` | `false` |

#### Returns

`string`

___

### monthName

▸ `Static` **monthName**(`month`, `type`, `short?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `month` | [`Month`](../enums/Month.md) | `undefined` |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) | `undefined` |
| `short` | `boolean` | `true` |

#### Returns

`string`

___

### weekDayName

▸ `Static` **weekDayName**(`dayOfWeek`, `type`, `shortTo?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dayOfWeek` | [`DayOfWeek`](../enums/DayOfWeek.md) |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) |
| `shortTo?` | `number` |

#### Returns

`string`

___

### yearName

▸ `Static` **yearName**(`year`, `type`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `type` | [`LocalDateType`](../enums/LocalDateType.md) |

#### Returns

`string`
