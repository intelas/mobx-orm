import{observable as e,action as t,makeObservable as i,runInAction as r,autorun as s,reaction as o,observe as a,computed as n,extendObservable as l,intercept as d}from"mobx";
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
***************************************************************************** */function _(e,t,i,r){var s,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}class h{constructor(e,t,r,s,o,a){Object.defineProperty(this,"filters",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"order_by",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"page_size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__base_cache",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__adapter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__items",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"__is_loading",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"__is_ready",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"__error",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"__disposers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"__disposer_objects",{enumerable:!0,configurable:!0,writable:!0,value:{}}),this.__base_cache=t,this.__adapter=e,r&&(this.filters=r),s&&(this.order_by=s),o&&(this.page=o),a&&(this.page_size=a),i(this)}get items(){return this.__items}get is_loading(){return this.__is_loading}get is_ready(){return this.__is_ready}get error(){return this.__error}destroy(){for(let e of this.__disposers)e();for(let e in this.__disposer_objects)this.__disposer_objects[e]()}async load(){this.__is_loading=!0;try{await this.shadowLoad()}finally{r((()=>this.__is_loading=!1))}}async shadowLoad(){try{let e=await this.__adapter.load(this.filters,this.order_by,this.page_size,this.page*this.page_size);this.__load(e),r((()=>this.__is_ready=!0))}catch(e){throw r((()=>this.__error=e)),e}}ready(){return new Promise(((e,t)=>{s((t=>{this.__is_ready&&(t.dispose(),e(this.__is_ready))}))}))}loading(){return new Promise(((e,t)=>{s((t=>{this.__is_loading||(t.dispose(),e(!this.__is_loading))}))}))}__is_matched(e){for(let t in this.filters)if(e[t]!=this.filters[t])return!1;return!0}}_([e,c("design:type",Object)],h.prototype,"filters",void 0),_([e,c("design:type",Array)],h.prototype,"order_by",void 0),_([e,c("design:type",Number)],h.prototype,"page",void 0),_([e,c("design:type",Number)],h.prototype,"page_size",void 0),_([e,c("design:type",Array)],h.prototype,"__items",void 0),_([e,c("design:type",Boolean)],h.prototype,"__is_loading",void 0),_([e,c("design:type",Boolean)],h.prototype,"__is_ready",void 0),_([e,c("design:type",String)],h.prototype,"__error",void 0),_([t,c("design:type",Function),c("design:paramtypes",[]),c("design:returntype",Promise)],h.prototype,"load",null),_([t,c("design:type",Function),c("design:paramtypes",[]),c("design:returntype",Promise)],h.prototype,"shadowLoad",null);class u extends h{__load(e){r((()=>{this.__items.splice(0,this.__items.length),this.__items.push(...e)}))}constructor(e,t,i,s){super(e,t,i,s),this.load(),this.__disposers.push(o((()=>{this.filters}),(()=>{this.load()}))),this.__disposers.push(a(this.__base_cache,(e=>{if("add"==e.type&&this.watch_obj(e.newValue),"delete"==e.type){let t=e.name,i=e.oldValue;this.__disposer_objects[t](),delete this.__disposer_objects[t];let s=this.items.indexOf(i);-1!=s&&r((()=>{this.items.splice(s,1)}))}})));for(let[e,t]of this.__base_cache)this.watch_obj(t)}watch_obj(e){this.__disposer_objects[e.__id]=s((()=>{let t=this.__is_matched(e),i=this.items.indexOf(e);t&&-1==i&&r((()=>this.items.push(e))),t||-1==i||r((()=>this.items.splice(i,1)))}))}}class f extends h{__load(e){r((()=>{this.__items.splice(0,this.__items.length),this.__items.push(...e)}))}constructor(e,t,i,r,s,a){super(e,t,i,r),void 0===this.page&&(this.page=0),void 0===this.page_size&&(this.page_size=50),this.load(),this.__disposers.push(o((()=>({filter:this.filters,order_by:this.order_by,page:this.page,page_size:this.page_size})),(()=>{this.load()})))}}class p{constructor(...e){Object.defineProperty(this,"__init_data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"disposers",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}static inject(e){if(null===e.__id)throw new Error("Object should have id!");if(this.cache.has(e.__id))throw new Error(`Object with id "${e.__id}" already exist in the cache of model: "${this.name}")`);this.cache.set(e.__id,e)}static eject(e){if(null!==e.__id){if(!this.cache.has(e.__id))throw new Error(`Object with id "${e.__id}" not exist in the cache of model: ${this.name}")`);this.cache.delete(e.__id)}}static async find(e){return this.adapter.find(e)}static load(e,t){return new u(this.adapter,this.cache,e,t)}static loadPage(e,t,i,r){return new f(this.adapter,this.cache,e,t,i,r)}static get(e){return this.cache.get(e)}static updateCache(e){let t,i=this.__id(e);return this.cache.has(i)?r((()=>{t=this.cache.get(i),t.updateFromRaw(e)})):t=new this(e),t}static clearCache(){for(let e of this.cache.values())for(let t of this.ids.keys())e[t]=null}static __id(e,t){let i="";void 0===t&&(t=Array.from(this.ids.keys()));for(let r of t){if(null===e[r]||void 0===e[r])return null;i+=`${e[r]}${this.id_separator}`}return i=i.slice(0,-this.id_separator.length),i}get __id(){return this.model.__id(this)}get model(){return this.constructor.__proto__}get raw_obj(){let e=this.raw_data;for(let t of this.model.ids.keys())void 0!==this[t]&&(e[t]=this[t]);return e.__id=this.__id,e}get raw_data(){let e={};for(let t in this.model.fields)void 0!==this[t]&&(e[t]=this[t]);return e}get is_changed(){let e=!1;for(let t in this.model.fields)this[t]!=this.__init_data[t]&&(e=!0);return e}async create(){return await this.model.adapter.create(this)}async update(){return await this.model.adapter.update(this)}async delete(){return await this.model.adapter.delete(this)}async save(){return null===this.__id?this.create():this.update()}refresh_init_data(){void 0===this.__init_data&&(this.__init_data={});for(let e in this.model.fields)this.__init_data[e]=this[e]}updateFromRaw(e){for(let t of this.model.ids.keys())void 0!==e[t]&&this[t]!=e[t]&&(this[t]=e[t]);for(let t in this.model.fields)void 0!==e[t]&&(this[t]=e[t])}}function y(t){var s=t;s.cache=e(new Map);let o=function(...e){let t=class extends s{constructor(...e){super(...e)}};t.__proto__=s;let o=new t,a=o.model;if(i(o),void 0===a.ids)throw`No one id field was declared on model ${a.name}`;for(let e of a.ids.keys())a.ids.get(e).decorator(o,e);for(let e in a.fields)a.fields[e].decorator(o,e);for(let e in a.relations)a.relations[e].decorator(o,e);return r((()=>{if(e[0]){let t=e[0];for(let e of a.ids.keys())void 0!==t[e]&&(o[e]=t[e]);for(let e in a.fields)void 0!==t[e]&&(o[e]=t[e])}})),o.refresh_init_data(),o};return o.__proto__=s,o.prototype=s.prototype,o}Object.defineProperty(p,"id_separator",{enumerable:!0,configurable:!0,writable:!0,value:"-"}),_([n,c("design:type",String),c("design:paramtypes",[])],p.prototype,"__id",null),_([t,c("design:type",Function),c("design:paramtypes",[]),c("design:returntype",void 0)],p.prototype,"refresh_init_data",null),_([t,c("design:type",Function),c("design:paramtypes",[Object]),c("design:returntype",void 0)],p.prototype,"updateFromRaw",null),_([t,c("design:type",Function),c("design:paramtypes",[p]),c("design:returntype",void 0)],p,"inject",null),_([t,c("design:type",Function),c("design:paramtypes",[p]),c("design:returntype",void 0)],p,"eject",null),_([t,c("design:type",Function),c("design:paramtypes",[Object]),c("design:returntype",p)],p,"updateCache",null);class m{constructor(e){Object.defineProperty(this,"model",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.model=e}async create(e){let t=await this.__create(e.raw_obj);return e.updateFromRaw(t),e.refresh_init_data(),e}async update(e){let t=await this.__update(e.raw_obj);return e.updateFromRaw(t),e.refresh_init_data(),e}async delete(e){await this.__delete(e.raw_obj);for(let t of this.model.ids.keys())e[t]=null;return e}async find(e){let t=await this.__find(e);return this.model.updateCache(t)}async load(e,t,i,r){let s=await this.__load(e,t,i,r),o=[];for(let e of s)o.push(this.model.updateCache(e));return o}}let g={};function b(e){return new Promise((t=>setTimeout(t,e)))}class w extends m{constructor(e,t){super(e),Object.defineProperty(this,"store_name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"delay",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.store_name=t||e.__proto__.name,g[this.store_name]={}}init_local_data(e){let t={};for(let i of e)t[this.model.__id(i)]=i;g[this.store_name]=t}async __create(e){if(this.delay&&await b(this.delay),null===e.__id){let t=[0];for(let e of Object.keys(g[this.store_name]))t.push(parseInt(e));let i=Math.max.apply(null,t);for(let t of this.model.ids.keys())e[t]=i+1}return e.__id=this.model.__id(e),g[this.store_name][this.model.__id(e)]=e,e}async __update(e){return this.delay&&await b(this.delay),g[this.store_name][e.__id]=e,e}async __delete(e){return this.delay&&await b(this.delay),delete g[this.store_name][e.__id],e}async __find(e){return this.delay&&await b(this.delay),Object.values(g[this.store_name])[0]}async __load(e,t,i,r){this.delay&&await b(this.delay);let s=[];if(e)for(let e of Object.values(g[this.store_name]));else s=Object.values(g[this.store_name]);return t&&(s=s.sort(((e,i)=>{for(let e of t);return 0}))),void 0!==i&&void 0!==r&&(s=s.slice(r,r+i)),s}async getTotalCount(e){return[].length}}function v(){return e=>{let t=new w(e);e.__proto__.adapter=t}}function j(e,t){l(e,{[t]:null}),d(e,t,(i=>{if(null!==i.newValue&&null!==e[t])throw new Error(`You cannot change id field: ${t}. ${e[t]} to ${i.newValue}`);if(null!==e[t]&&null===i.newValue)try{e.model.eject(e)}catch(t){let i=`Object with id "${e.__id}" not exist in the model cache: ${e.model.name}")`;if(t.name!==i)throw t}return i})),a(e,t,(t=>{null!==e.__id&&e.model.inject(e)}))}function O(e,t){let i=e.constructor;void 0===i.ids&&(i.ids=new Map),i.ids.set(t,{decorator:j})}function P(e,t){l(e,{[t]:e[t]})}function $(e,t){let i=e.constructor;void 0===i.fields&&(i.fields={}),i.fields[t]={decorator:P}}function V(e,t){let i=!1,r=e.model.relations[t].settings,s=r.foreign_model,n=r.foreign_ids_names;l(e,{[t]:null}),o((()=>{let t=s.__id(e,n);return t?s.cache.get(t):null}),((i,r,s)=>{e[t]=i||null})),d(e,t,(e=>{if(null!==e.newValue&&e.newValue.model!=s)throw new Error(`You can set only instance of "${s.name}" or null`);return e})),a(e,t,(t=>{let s=t.newValue,o=t.oldValue;if(s!==o&&!i){i=!0;try{if(null===t.newValue)for(let t of n)e[t]=null;else{let i=Array.from(t.newValue.model.ids.keys());for(var a=0;a<n.length;a++)e[n[a]]!=t.newValue[i[a]]&&(e[n[a]]=t.newValue[i[a]])}i=!1}catch(r){if(null===t.oldValue)for(a=0;a<n.length;a++)e[n[a]]=null;else{let i=t.oldValue.model.ids;for(a=0;a<n.length;a++)e[n[a]]=t.oldValue[i[a]]}throw i=!1,r}r.one&&(o&&(o[r.one]=null),s&&(s[r.one]=e))}}))}function k(e,...t){return e=e.__proto__,function(i,r){let s=i.constructor;void 0===s.relations&&(s.relations={}),s.relations[r]={decorator:V,settings:{foreign_model:e,foreign_ids_names:t.length?t:[`${r}_id`]}}}}function x(e,t){let i=!1,r=e.model.relations[t].settings.remote_model,s=e.model.relations[t].settings.remote_foreign_ids_names;l(e,{[t]:null}),d(e,t,(e=>{if(null!==e.newValue&&e.newValue.model!==r)throw new Error(`You can set only instance of "${r.name}" or null`);return e})),a(e,t,(t=>{let r=t.oldValue,o=t.newValue;if(o!==r&&!i){i=!0;try{if(r)for(let e of s)r[e]=null;if(o){let t=Array.from(e.model.ids.keys());for(var a=0;a<s.length;a++)o[s[a]]!=e[t[a]]&&(o[s[a]]=e[t[a]])}i=!1}catch(e){}}}))}function F(e,...t){return e=e.__proto__,function(i,o){let n=i.prototype.constructor;void 0===n.relations&&(n.relations={}),t=t.length?t:[`${n.name.toLowerCase()}_id`],n.relations[o]={decorator:x,settings:{remote_model:e,remote_foreign_ids_names:t}},a(e.cache,(e=>{let i;switch(e.type){case"add":i=e.newValue,i.disposers.set(`one ${o}`,s((()=>{let e=n.cache.get(n.__id(i,t));e&&r((()=>{e[o]=i}))})));break;case"delete":i=e.oldValue,i.disposers.get(`one ${o}`)&&(i.disposers.get(`one ${o}`)(),i.disposers.delete(`one ${o}`));let a=n.cache.get(n.__id(i,t));a&&r((()=>{a[o]=null}))}}))}}function R(e,t){let i=!1;e.model.relations[t].settings.remote_model;let r=e.model.relations[t].settings.remote_foreign_ids_names;l(e,{[t]:[]}),d(e[t],(e=>e)),a(e[t],(t=>{if("splice"!==t.type)return;let s=t.removed,o=t.added;i=!0;try{for(let e of s)for(let t of r)e[t]=null;let t=Array.from(e.model.ids.keys());for(let i of o)for(var a=0;a<r.length;a++)i[r[a]]!=e[t[a]]&&(i[r[a]]=e[t[a]]);i=!1}catch(e){}}))}function z(e,...t){return function(i,o){let n=i.prototype.constructor;void 0===n.relations&&(n.relations={}),t=t.length?t:[`${n.name.toLowerCase()}_id`],n.relations[o]={decorator:R,settings:{remote_model:e,remote_foreign_ids_names:t}},a(e.cache,(e=>{let i;switch(e.type){case"add":i=e.newValue,i.disposers.set(`many ${o}`,s((()=>{let e=n.cache.get(n.__id(i,t));if(e){-1==e[o].indexOf(i)&&r((()=>{e[o].push(i)}))}})));break;case"delete":i=e.oldValue,i.disposers.get(`many ${o}`)&&(i.disposers.get(`many ${o}`)(),i.disposers.delete(`many ${o}`));let a=n.cache.get(n.__id(i,t));if(a){const e=a[o].indexOf(i);e>-1&&r((()=>{a[o].splice(e,1)}))}}}))}}export{m as Adapter,w as LocalAdapter,p as Model,u as Query,h as QueryBase,f as QueryPage,$ as field,k as foreign,O as id,v as local,z as many,y as model,F as one};
//# sourceMappingURL=mobx-orm.es2015.js.map
