export const MOBX_ORM_FILTER_BRAND = 'mobx-orm-filter' as const

export abstract class Filter {
    abstract get URLSearchParams() : URLSearchParams
    abstract setFromURI(uri: string) : void
    abstract isMatch(obj: any) : boolean
    
    /**
     * Type brand to distinguish from api filters
     */
    readonly __filterBrand: typeof MOBX_ORM_FILTER_BRAND = MOBX_ORM_FILTER_BRAND
}
