import { Model } from '../model'
import Adapter  from './adapter'

/*
You can use this adapter for mock data or for unit test
*/

type RawObject = any 

export let store: any = {}

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class LocalAdapter<M extends Model> extends Adapter<M> {

    readonly store_name: string

    // delays for simulate real usage, use it only for tests
    delay: number 

    init_local_data(data: RawObject[]) {
        let objs = {} 
        for(let obj of data) {
            objs[this.model.__id(obj)] = obj
        }
        store[this.store_name] = objs
    }

    constructor(model: any, store_name?: string) {
        super(model)
        this.store_name = store_name ? store_name : model.__proto__.name
        store[this.store_name] = {}
    }

    async __create(obj: RawObject) : Promise<RawObject> {
        if (this.delay) await timeout(this.delay) 

        if (obj.__id === null) {
            // calculate and set new ID
            let ids = [0]
            for(let id of Object.keys(store[this.store_name])) {
                ids.push(parseInt(id))
            }
            let max = Math.max.apply(null, ids)
            for(let field_name_id of this.model.ids.keys()) {
                obj[field_name_id] = max + 1
            }
        }
        obj.__id = this.model.__id(obj)
        store[this.store_name][this.model.__id(obj)] = obj
        return obj
    }

    async __update(obj: RawObject) : Promise<RawObject> {
        if (this.delay) await timeout(this.delay) 
        store[this.store_name][obj.__id] = obj
        return obj
    }

    async __delete(obj: RawObject) : Promise<RawObject> {
        if (this.delay) await timeout(this.delay) 
        delete store[this.store_name][obj.__id]
        return obj
    }

    async __load (where?, order_by?, limit?, offset?) : Promise<RawObject[]> {
        if (this.delay) await timeout(this.delay) 

        let raw_objs = Object.values(store[this.store_name])
        if (limit !== undefined && offset !== undefined) {
            raw_objs = raw_objs.slice(offset, offset+limit)
        }
        return raw_objs 
    }

    // async getTotalCount(where?): Promise<number> {
    //     return 100
    // }
}

// model decorator
export function local() {
    return (cls: any) => {
        let adapter = new LocalAdapter(cls)
        cls.__proto__.adapter = adapter 
    }
}

