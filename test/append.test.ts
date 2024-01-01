import { expectType, expectError } from 'tsd';
import { __, append } from "../es";

expectType<number[]>(append(1)([0]))
expectType<'1'[]>(append<'1'>('1')(['1']))
expectType<string[]>(append('world')(['hello']))
expectType<Array<string | number>>(append<string | number>(1)(['hello']))
expectType<Array<string | undefined>>(append<string | undefined>(undefined)(['hello']))
expectType<{ text: string }[]>(append({ text: "world" })([{ text: "hello" }]))

expectType<number[]>(append(__, [0])(1))
expectType<'1'[]>(append<'1'>(__, ['1'])('1'))
expectType<string[]>(append(__, ['hello'])('hello'))
expectType<Array<string | number>>(append<string | number>(__, ['hello'])(1))
expectType<Array<string | undefined>>(append<string | undefined>(__, ['hello'])(undefined))
expectType<{ text: string; id: number; wildcard: boolean | undefined }[]>(append<{ text: string; id: number; wildcard: boolean | undefined }>(__, [{ text: "hello", id: 1, wildcard: undefined }])({ text: "world", id: 2, wildcard: true }))


expectType<number[]>(append(1, [0]))
expectType<'1'[]>(append<'1'>('1', ['1']))
expectType<string[]>(append('world', ['hello']))
expectType<Array<string | number>>(append<string | number>(1, ['hello']))
expectType<Array<string | undefined>>(append<string | undefined>(undefined, ['hello']))
expectType<{ text: string }[]>(append({ text: "world" }, [{ text: "hello" }]))

expectError(append<number>('1', [0]))
expectError(append<number>(null, [0]))
expectError(append<'1'>('2', ['1']))