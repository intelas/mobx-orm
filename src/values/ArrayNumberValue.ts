import { ArrayValue } from './ArrayValue'
import { NumberValue } from './NumberValue'

export class ArrayNumberValue extends ArrayValue<number[]> {

    serialize(value?: string) : number[] {
        let result = [] 
        if (value) {
            let converter = new NumberValue()
            for (const i of value.split(',')) {
                let tmp = converter.serialize(i)
                if (tmp !== undefined) {
                    result.push(tmp)
                }
            }
        }
        return result
    }

    deserialize(value: number[]) : string {
        let result = [] 
        if (value) {
            for (const i of value) {
                let converter = new NumberValue()
                let v = converter.deserialize(i) 
                if (v !== undefined) {
                    result.push(v)
                }
            }

        }
        return result.length ? result.join(',') : undefined
    }
}