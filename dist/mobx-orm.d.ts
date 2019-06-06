
// FILE GENERATED BY `rollup-plugin-dts@0.15.1`
// https://github.com/Swatinem/rollup-plugin-dts

interface FieldTypeDecorator {
    (model_name: string, field_name: string, obj: Object): void;
}
interface ModelDescription {
    fields: {
        [field_name: string]: {
            type: undefined | string;
            settings: undefined | any;
            serialize: undefined | any;
            deserialize: undefined | any;
        };
    };
    objects: {
        [id: number]: object;
    };
    unique: {
        [field_name: string]: any;
    };
    getNewId: () => number;
    save: undefined | ((obj: any) => any);
    delete: undefined | ((obj: any) => any);
    load: undefined | ((model_name: any, where: any, order_by: any, limit: any, offset: any) => any);
}
declare class Store {
    debug: boolean;
    models: {
        [model_name: string]: ModelDescription;
    };
    field_types: {
        [type_name: string]: FieldTypeDecorator;
    };
    registerModel(model_name: any): void;
    registerFieldType(type: any, decorator: any): void;
    registerModelField(model_name: any, type: any, field_name: any, settings?: {}, serialize?: any, deserialize?: any): void;
    inject(model_name: any, object: any): void;
    eject(model_name: any, object: any): void;
    clear(): void;
    clearModel(model_name: any): void;
}
declare let store: Store;

declare class Model {
    static get(id: number): Model;
    static all(): Model[];
    static load(where?: {}, order_by?: {}, limit?: number, offset?: number): Promise<any>;
    static getFieldsMeta(): {
        [field_name: string]: {
            type: string;
            settings: any;
            serialize: any;
            deserialize: any;
        };
    };
    private readonly _init_data;
    constructor(init_data?: any);
    save(): Promise<any>;
    delete(): Promise<any>;
}
declare function model(cls: any): any;

declare function id(cls: any, field_name: string): void;

declare function field(cls: any, field_name: string): void;

declare function foreign(foreign_model_name: any, foreign_id_field_name?: string): (cls: any, field_name: string) => void;

declare function one(foreign_model_name: any, foreign_id_field_name: string): (cls: any, field_name: string) => void;

declare function many(foreign_model_name: any, foreign_id_field_name: string): (cls: any, many_field_name: string) => void;

declare function number(cls: any, field_name: string): void;

declare function number$1(cls: any, field_name: string): void;

declare function datetime(cls: any, field_name: string): void;

declare function number$2(cls: any, field_name: string): void;

export { Model, number$2 as boolean, datetime, field, number$1 as float, foreign, id, many, model, number, one, store };
