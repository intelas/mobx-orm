!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mobx")):"function"==typeof define&&define.amd?define(["exports","mobx"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["MobX-ORM"]={},e.mobx)}(this,(function(e,t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function i(e,t,i,r){var s,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}function r(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}class s{constructor(e,i,r,s,o,n){Object.defineProperty(this,"filters",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"order_by",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"page_size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__base_cache",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__adapter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__items",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"__is_loading",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"__is_ready",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"__error",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"__disposers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"__disposer_objects",{enumerable:!0,configurable:!0,writable:!0,value:{}}),this.__base_cache=i,this.__adapter=e,r&&(this.filters=r),s&&(this.order_by=s),o&&(this.page=o),n&&(this.page_size=n),t.makeObservable(this)}get items(){return this.__items}get is_loading(){return this.__is_loading}get is_ready(){return this.__is_ready}get error(){return this.__error}destroy(){for(let e of this.__disposers)e();for(let e in this.__disposer_objects)this.__disposer_objects[e]()}async load(){this.__is_loading=!0;try{await this.shadowLoad()}finally{t.runInAction((()=>this.__is_loading=!1))}}async shadowLoad(){try{let e=await this.__adapter.load(this.filters,this.order_by,this.page_size,this.page*this.page_size);this.__load(e),t.runInAction((()=>this.__is_ready=!0))}catch(e){throw t.runInAction((()=>this.__error=e)),e}}ready(){return new Promise(((e,i)=>{t.autorun((t=>{this.__is_ready&&(t.dispose(),e(this.__is_ready))}))}))}loading(){return new Promise(((e,i)=>{t.autorun((t=>{this.__is_loading||(t.dispose(),e(!this.__is_loading))}))}))}__is_matched(e){for(let t in this.filters)if(e[t]!=this.filters[t])return!1;return!0}}i([t.observable,r("design:type",Object)],s.prototype,"filters",void 0),i([t.observable,r("design:type",Array)],s.prototype,"order_by",void 0),i([t.observable,r("design:type",Number)],s.prototype,"page",void 0),i([t.observable,r("design:type",Number)],s.prototype,"page_size",void 0),i([t.observable,r("design:type",Array)],s.prototype,"__items",void 0),i([t.observable,r("design:type",Boolean)],s.prototype,"__is_loading",void 0),i([t.observable,r("design:type",Boolean)],s.prototype,"__is_ready",void 0),i([t.observable,r("design:type",String)],s.prototype,"__error",void 0),i([t.action,r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",Promise)],s.prototype,"load",null),i([t.action,r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",Promise)],s.prototype,"shadowLoad",null);class o extends s{__load(e){t.runInAction((()=>{this.__items.splice(0,this.__items.length),this.__items.push(...e)}))}constructor(e,i,r,s){super(e,i,r,s),this.load(),this.__disposers.push(t.reaction((()=>{this.filters}),(()=>{this.load()}))),this.__disposers.push(t.observe(this.__base_cache,(e=>{if("add"==e.type&&this.watch_obj(e.newValue),"delete"==e.type){let i=e.name,r=e.oldValue;this.__disposer_objects[i](),delete this.__disposer_objects[i];let s=this.items.indexOf(r);-1!=s&&t.runInAction((()=>{this.items.splice(s,1)}))}})));for(let[e,t]of this.__base_cache)this.watch_obj(t)}watch_obj(e){this.__disposer_objects[e.__id]=t.autorun((()=>{let i=this.__is_matched(e),r=this.items.indexOf(e);i&&-1==r&&t.runInAction((()=>this.items.push(e))),i||-1==r||t.runInAction((()=>this.items.splice(r,1)))}))}}class n extends s{__load(e){t.runInAction((()=>{this.__items.splice(0,this.__items.length),this.__items.push(...e)}))}constructor(e,i,r,s,o,n){super(e,i,r,s),void 0===this.page&&(this.page=0),void 0===this.page_size&&(this.page_size=50),this.load(),this.__disposers.push(t.reaction((()=>({filter:this.filters,order_by:this.order_by,page:this.page,page_size:this.page_size})),(()=>{this.load()})))}}class a{constructor(...e){Object.defineProperty(this,"__init_data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"disposers",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}static inject(e){if(null===e.__id)throw new Error("Object should have id!");if(this.cache.has(e.__id))throw new Error(`Object with id "${e.__id}" already exist in the cache of model: "${this.name}")`);this.cache.set(e.__id,e)}static eject(e){if(null!==e.__id){if(!this.cache.has(e.__id))throw new Error(`Object with id "${e.__id}" not exist in the cache of model: ${this.name}")`);this.cache.delete(e.__id)}}static async find(e){return this.adapter.find(e)}static load(e,t){return new o(this.adapter,this.cache,e,t)}static loadPage(e,t,i,r){return new n(this.adapter,this.cache,e,t,i,r)}static get(e){return this.cache.get(e)}static updateCache(e){let i,r=this.__id(e);return this.cache.has(r)?t.runInAction((()=>{i=this.cache.get(r),i.updateFromRaw(e)})):i=new this(e),i}static clearCache(){for(let e of this.cache.values())for(let t of this.ids.keys())e[t]=null}static __id(e,t){let i="";void 0===t&&(t=Array.from(this.ids.keys()));for(let r of t){if(null===e[r]||void 0===e[r])return null;i+=`${e[r]}${this.id_separator}`}return i=i.slice(0,-this.id_separator.length),i}get __id(){return this.model.__id(this)}get model(){return this.constructor.__proto__}get raw_obj(){let e=this.raw_data;for(let t of this.model.ids.keys())void 0!==this[t]&&(e[t]=this[t]);return e.__id=this.__id,e}get raw_data(){let e={};for(let t in this.model.fields)void 0!==this[t]&&(e[t]=this[t]);return e}get is_changed(){let e=!1;for(let t in this.model.fields)this[t]!=this.__init_data[t]&&(e=!0);return e}async create(){return await this.model.adapter.create(this)}async update(){return await this.model.adapter.update(this)}async delete(){return await this.model.adapter.delete(this)}async save(){return null===this.__id?this.create():this.update()}refresh_init_data(){void 0===this.__init_data&&(this.__init_data={});for(let e in this.model.fields)this.__init_data[e]=this[e]}updateFromRaw(e){for(let t of this.model.ids.keys())void 0!==e[t]&&this[t]!=e[t]&&(this[t]=e[t]);for(let t in this.model.fields)void 0!==e[t]&&(this[t]=e[t])}}Object.defineProperty(a,"id_separator",{enumerable:!0,configurable:!0,writable:!0,value:"-"}),i([t.computed,r("design:type",String),r("design:paramtypes",[])],a.prototype,"__id",null),i([t.action,r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",void 0)],a.prototype,"refresh_init_data",null),i([t.action,r("design:type",Function),r("design:paramtypes",[Object]),r("design:returntype",void 0)],a.prototype,"updateFromRaw",null),i([t.action,r("design:type",Function),r("design:paramtypes",[a]),r("design:returntype",void 0)],a,"inject",null),i([t.action,r("design:type",Function),r("design:paramtypes",[a]),r("design:returntype",void 0)],a,"eject",null),i([t.action,r("design:type",Function),r("design:paramtypes",[Object]),r("design:returntype",a)],a,"updateCache",null);class l{constructor(e){Object.defineProperty(this,"model",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.model=e}async create(e){let t=await this.__create(e.raw_obj);return e.updateFromRaw(t),e.refresh_init_data(),e}async update(e){let t=await this.__update(e.raw_obj);return e.updateFromRaw(t),e.refresh_init_data(),e}async delete(e){await this.__delete(e.raw_obj);for(let t of this.model.ids.keys())e[t]=null;return e}async find(e){let t=await this.__find(e);return this.model.updateCache(t)}async load(e,t,i,r){let s=await this.__load(e,t,i,r),o=[];for(let e of s)o.push(this.model.updateCache(e));return o}}let d={};function _(e){return new Promise((t=>setTimeout(t,e)))}class c extends l{constructor(e,t){super(e),Object.defineProperty(this,"store_name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"delay",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.store_name=t||e.__proto__.name,d[this.store_name]={}}init_local_data(e){let t={};for(let i of e)t[this.model.__id(i)]=i;d[this.store_name]=t}async __create(e){if(this.delay&&await _(this.delay),null===e.__id){let t=[0];for(let e of Object.keys(d[this.store_name]))t.push(parseInt(e));let i=Math.max.apply(null,t);for(let t of this.model.ids.keys())e[t]=i+1}return e.__id=this.model.__id(e),d[this.store_name][this.model.__id(e)]=e,e}async __update(e){return this.delay&&await _(this.delay),d[this.store_name][e.__id]=e,e}async __delete(e){return this.delay&&await _(this.delay),delete d[this.store_name][e.__id],e}async __find(e){return this.delay&&await _(this.delay),Object.values(d[this.store_name])[0]}async __load(e,t,i,r){this.delay&&await _(this.delay);let s=[];if(e)for(let e of Object.values(d[this.store_name]));else s=Object.values(d[this.store_name]);return t&&(s=s.sort(((e,i)=>{for(let e of t);return 0}))),void 0!==i&&void 0!==r&&(s=s.slice(r,r+i)),s}async getTotalCount(e){return[].length}}function u(e,i){t.extendObservable(e,{[i]:null}),t.intercept(e,i,(t=>{if(null!==t.newValue&&null!==e[i])throw new Error(`You cannot change id field: ${i}. ${e[i]} to ${t.newValue}`);if(null!==e[i]&&null===t.newValue)try{e.model.eject(e)}catch(t){let i=`Object with id "${e.__id}" not exist in the model cache: ${e.model.name}")`;if(t.name!==i)throw t}return t})),t.observe(e,i,(t=>{null!==e.__id&&e.model.inject(e)}))}function h(e,i){t.extendObservable(e,{[i]:e[i]})}function f(e,i){let r=!1,s=e.model.relations[i].settings,o=s.foreign_model,n=s.foreign_ids_names;t.extendObservable(e,{[i]:null}),t.reaction((()=>{let t=o.__id(e,n);return t?o.cache.get(t):null}),((t,r,s)=>{e[i]=t||null})),t.intercept(e,i,(e=>{if(null!==e.newValue&&e.newValue.model!=o)throw new Error(`You can set only instance of "${o.name}" or null`);return e})),t.observe(e,i,(t=>{let i=t.newValue,o=t.oldValue;if(i!==o&&!r){r=!0;try{if(null===t.newValue)for(let t of n)e[t]=null;else{let i=Array.from(t.newValue.model.ids.keys());for(var a=0;a<n.length;a++)e[n[a]]!=t.newValue[i[a]]&&(e[n[a]]=t.newValue[i[a]])}r=!1}catch(i){if(null===t.oldValue)for(a=0;a<n.length;a++)e[n[a]]=null;else{let i=t.oldValue.model.ids;for(a=0;a<n.length;a++)e[n[a]]=t.oldValue[i[a]]}throw r=!1,i}s.one&&(o&&(o[s.one]=null),i&&(i[s.one]=e))}}))}function p(e,i){let r=!1,s=e.model.relations[i].settings.remote_model,o=e.model.relations[i].settings.remote_foreign_ids_names;t.extendObservable(e,{[i]:null}),t.intercept(e,i,(e=>{if(null!==e.newValue&&e.newValue.model!==s)throw new Error(`You can set only instance of "${s.name}" or null`);return e})),t.observe(e,i,(t=>{let i=t.oldValue,s=t.newValue;if(s!==i&&!r){r=!0;try{if(i)for(let e of o)i[e]=null;if(s){let t=Array.from(e.model.ids.keys());for(var n=0;n<o.length;n++)s[o[n]]!=e[t[n]]&&(s[o[n]]=e[t[n]])}r=!1}catch(e){}}}))}function y(e,i){let r=!1;e.model.relations[i].settings.remote_model;let s=e.model.relations[i].settings.remote_foreign_ids_names;t.extendObservable(e,{[i]:[]}),t.intercept(e[i],(e=>e)),t.observe(e[i],(t=>{if("splice"!==t.type)return;let i=t.removed,o=t.added;r=!0;try{for(let e of i)for(let t of s)e[t]=null;let t=Array.from(e.model.ids.keys());for(let i of o)for(var n=0;n<s.length;n++)i[s[n]]!=e[t[n]]&&(i[s[n]]=e[t[n]]);r=!1}catch(e){}}))}e.Adapter=l,e.LocalAdapter=c,e.Model=a,e.Query=o,e.QueryBase=s,e.QueryPage=n,e.field=function(e,t){let i=e.constructor;void 0===i.fields&&(i.fields={}),i.fields[t]={decorator:h}},e.foreign=function(e,...t){return e=e.__proto__,function(i,r){let s=i.constructor;void 0===s.relations&&(s.relations={}),s.relations[r]={decorator:f,settings:{foreign_model:e,foreign_ids_names:t.length?t:[`${r}_id`]}}}},e.id=function(e,t){let i=e.constructor;void 0===i.ids&&(i.ids=new Map),i.ids.set(t,{decorator:u})},e.local=function(){return e=>{let t=new c(e);e.__proto__.adapter=t}},e.many=function(e,...i){return function(r,s){let o=r.prototype.constructor;void 0===o.relations&&(o.relations={}),i=i.length?i:[`${o.name.toLowerCase()}_id`],o.relations[s]={decorator:y,settings:{remote_model:e,remote_foreign_ids_names:i}},t.observe(e.cache,(e=>{let r;switch(e.type){case"add":r=e.newValue,r.disposers.set(`many ${s}`,t.autorun((()=>{let e=o.cache.get(o.__id(r,i));if(e){-1==e[s].indexOf(r)&&t.runInAction((()=>{e[s].push(r)}))}})));break;case"delete":r=e.oldValue,r.disposers.get(`many ${s}`)&&(r.disposers.get(`many ${s}`)(),r.disposers.delete(`many ${s}`));let n=o.cache.get(o.__id(r,i));if(n){const e=n[s].indexOf(r);e>-1&&t.runInAction((()=>{n[s].splice(e,1)}))}}}))}},e.model=function(e){var i=e;i.cache=t.observable(new Map);let r=function(...e){let r=class extends i{constructor(...e){super(...e)}};r.__proto__=i;let s=new r,o=s.model;if(t.makeObservable(s),void 0===o.ids)throw`No one id field was declared on model ${o.name}`;for(let e of o.ids.keys())o.ids.get(e).decorator(s,e);for(let e in o.fields)o.fields[e].decorator(s,e);for(let e in o.relations)o.relations[e].decorator(s,e);return t.runInAction((()=>{if(e[0]){let t=e[0];for(let e of o.ids.keys())void 0!==t[e]&&(s[e]=t[e]);for(let e in o.fields)void 0!==t[e]&&(s[e]=t[e])}})),s.refresh_init_data(),s};return r.__proto__=i,r.prototype=i.prototype,r},e.one=function(e,...i){return e=e.__proto__,function(r,s){let o=r.prototype.constructor;void 0===o.relations&&(o.relations={}),i=i.length?i:[`${o.name.toLowerCase()}_id`],o.relations[s]={decorator:p,settings:{remote_model:e,remote_foreign_ids_names:i}},t.observe(e.cache,(e=>{let r;switch(e.type){case"add":r=e.newValue,r.disposers.set(`one ${s}`,t.autorun((()=>{let e=o.cache.get(o.__id(r,i));e&&t.runInAction((()=>{e[s]=r}))})));break;case"delete":r=e.oldValue,r.disposers.get(`one ${s}`)&&(r.disposers.get(`one ${s}`)(),r.disposers.delete(`one ${s}`));let n=o.cache.get(o.__id(r,i));n&&t.runInAction((()=>{n[s]=null}))}}))}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=mobx-orm.js.map
