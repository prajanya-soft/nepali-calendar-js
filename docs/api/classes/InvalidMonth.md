[@prajanya-soft/nepali-calendar](../README.md) / InvalidMonth

# Class: InvalidMonth

## Hierarchy

- `Error`

  ↳ **`InvalidMonth`**

## Table of contents

### Constructors

- [constructor](InvalidMonth.md#constructor)

### Properties

- [cause](InvalidMonth.md#cause)
- [message](InvalidMonth.md#message)
- [name](InvalidMonth.md#name)
- [stack](InvalidMonth.md#stack)
- [prepareStackTrace](InvalidMonth.md#preparestacktrace)
- [stackTraceLimit](InvalidMonth.md#stacktracelimit)

### Methods

- [captureStackTrace](InvalidMonth.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidMonth**(`month`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `month` | [`Month`](../enums/Month.md) |

#### Overrides

Error.constructor

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

Error.cause

#### Defined in

node_modules/.pnpm/typescript@4.7.3/node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@4.7.3/node_modules/typescript/lib/lib.es5.d.ts:1029

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@4.7.3/node_modules/typescript/lib/lib.es5.d.ts:1028

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@4.7.3/node_modules/typescript/lib/lib.es5.d.ts:1030

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@17.0.42/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@17.0.42/node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace
