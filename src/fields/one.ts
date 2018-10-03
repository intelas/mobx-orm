import store from '../store'


let type = 'one'

export function registerOne() {
	store.registerFieldType(type, (model_name, field_name, obj) => {
		let model_description 				= store.models[model_name]
		let field_description 				= model_description.fields[field_name]
		let foreign_model_name    		= field_description.settings.foreign_model_name
		let foreign_id_field_name 		= field_description.settings.foreign_id_field_name
		let foreign_model_description = store.models[foreign_model_name]
		let foreign_field_description = foreign_model_description.fields[foreign_id_field_name]

		Object.defineProperty (obj, field_name, {
			get: () => obj.__data[field_name],
			set: (new_value) => {
				let old_value = obj.__data[field_name]
				if (old_value === new_value) return  // it will help stop endless loop A.b -> B.a_id -> A.b -> B.a_id ...

				if (new_value !== null && !(new_value.constructor && new_value.constructor.name == foreign_model_name))
					throw new Error(`You can set only instance of "${foreign_model_name}" or null`)
				if (new_value !== null && new_value.id === null)
					throw new Error(`Object should have id!`)


				function invoke(new_value, old_value) {
					obj.__data[field_name]     = new_value
					obj[foreign_id_field_name] = new_value === null ? null : new_value.id
					obj._field_events[field_name].emit({new_value: new_value, old_value: old_value})
					store.models[model_name].fields[field_name].onUpdate.emit({obj:obj, new_value: new_value, old_value: old_value})
				}

				let prev_id_on_new_value = new_value != null ? new_value[foreign_id_field_name] : null

				try {
					if (old_value !== null) old_value[foreign_id_field_name] = null
					if (new_value !== null) new_value[foreign_id_field_name] = obj.id
					obj.__data[field_name] = new_value

					obj._field_events[field_name].emit({new_value: new_value, old_value: old_value})
					field_description.onUpdate.emit(obj)
				}
				catch(e) {
					// if any callback throw exception then rollback changes!
					obj.__data[field_name] = old_value
					if (new_value !== null) new_value[foreign_id_field_name] = prev_id_on_new_value
					if (old_value !== null) old_value[foreign_id_field_name] = obj.id

					obj._field_events[field_name].emit({new_value: old_value, old_value: new_value})
					field_description.onUpdate.emit(obj)
					throw e
				}
			}
		})

		if (!field_description.settings.subscription_to_foreign) {
			field_description.settings.subscription_to_foreign = foreign_field_description.onUpdate(({obj, new_value, old_value}) => {

				let old_obj:any = model_description.objects[old_value]
				let new_obj:any = model_description.objects[new_value]

				if (new_obj && new_obj[field_name] != null)
					throw new Error('Not unique value. (One)')

				if (old_obj) old_obj[field_name] = null
				if (new_obj) new_obj[field_name] = obj
			})
		}

		if (!field_description.settings.subscription_on_inject) {
			field_description.settings.subscription_on_inject = foreign_model_description.onInject((foreign) => {
				if (foreign[foreign_id_field_name] != null) {
					let obj:any = model_description.objects[foreign[foreign_id_field_name]]
					if (obj[field_name] == null)
						obj[field_name] = foreign
					else
						throw new Error('Not unique value. (One)')
				}
			})
		}

		if (!field_description.settings.subscription_on_eject) {
			field_description.settings.subscription_on_eject = foreign_model_description.onEject((foreign) => {
				if (foreign[foreign_id_field_name] != null) {
					let obj:any = model_description.objects[foreign[foreign_id_field_name]]
					obj[field_name] = null
				}
			})
		}

	})
}
registerOne()


export default function one(foreign_model_name: string, foreign_id_field_name: string) {
	return function (cls: any, field_name: string) {

		// It can be wrong name "Function" because we wrapped class in decorator before.
		let model_name = cls.constructor.name == 'Function' ? cls.prototype.constructor.name : cls.constructor.name

		// не выполняеться! потому что класс B объявлен после класса А
		// а он уже нужен в классе А!!!
		// console.warn(cls, '---', field_name, '---', Reflect.getMetadata('design:type', cls, field_name))

		store.registerModelField(model_name, type, field_name, {
			foreign_model_name   : foreign_model_name,
			foreign_id_field_name: foreign_id_field_name
		})
	}
}
