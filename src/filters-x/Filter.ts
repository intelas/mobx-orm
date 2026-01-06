import { MOBX_ORM_FILTER_BRAND } from '../filters/Filter'

export abstract class XFilter {
    abstract get URLSearchParams() : URLSearchParams
    abstract isMatch(obj: any) : boolean
    abstract get isReady() : boolean
    
    /**
     * Type brand to distinguish from api filters
     */
    readonly __filterBrand: typeof MOBX_ORM_FILTER_BRAND = MOBX_ORM_FILTER_BRAND
}
