import { ASC, Adapter, Model, QueryX } from "."

export let obj_a = {id: 0, a: 5, b: 'a', c: true } 
export let obj_b = {id: 1,       b: 'c', c: false} 
export let obj_c = {id: 2, a: 2,         c: false} 
export let obj_d = {id: 3, a: 2, b: 'f'          } 
export let obj_e = {id: 4, a: 1, b: 'a', c: true } 

export let data_set = [ obj_a, obj_b, obj_c, obj_d, obj_e ]


export class BaseTestAdapter extends Adapter<any> {
        async __create(raw_data, controllerr) {}
        async __update() {}
        async __delete(obj_id, controller?) {}
        async __action(obj_id, name, kwargs, controller?) { return }
        async __find(selector, controller?) { return {} }
        async __get(obj_id, controller?) { return {} }
        async __load(selector, controller?) {
            return [1,2,3]
        }
        async getTotalCount(where?, controller?): Promise<number> { return 0 }
        async getDistinct(where, field, controller?) { return [] }

        QueryURLSearchParams(query: QueryX<any>): URLSearchParams{
            const searchParams = query.filter ? query.filter.URLSearchParams : new URLSearchParams()
            const order_by = []
            if (query.order_by?.size) 
                for (const field of query.order_by.keys()) {
                    const value = query.order_by.get(field)
                    const _field = field.replace(/\./g, '__')
                    order_by.push(value === ASC ? `${_field}` : `-${_field}`)
                }
            if (order_by.length             ) searchParams.set('__order_by' , order_by.join())
            if (query.limit !== undefined   ) searchParams.set('__limit'    , query.limit as any)
            if (query.offset !== undefined  ) searchParams.set('__offset'   , query.offset as any)
            if (query.relations?.length     ) searchParams.set('__relations', query.relations as any)
            if (query.fields?.length        ) searchParams.set('__fields'   , query.fields as any)
            if (query.omit?.length          ) searchParams.set('__omit'     , query.omit as any)
            return searchParams
        }
    }