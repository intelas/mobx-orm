import store 	from '../store'
import Model  from '../model'
import id 			from '../fields/id'
import field 		from '../fields/field'
import foreign	from '../fields/foreign'
import one  		from '../fields/one'


describe('User Profile.', async () => {

	store.clear()

	class User extends Model {
		@id       id      : number
		@field    name		: string
		@one('UserProfile', 'user_id') profile : UserProfile
	}

	class UserProfile extends Model {
		@id 	  					id			: number
		@field  					user_id	: number
		@foreign('User') 	user 		: User
		@field						test		: string
	}

	it('...', async ()=> {
		let user_a, user_b, user_profile_a, user_profile_b

		user_a = new User({id: 1, name: 'A'})
		user_b = new User({id: 2, name: 'B'})
		expect(user_a.profile).toBeNull()
		expect(user_b.profile).toBeNull()

		user_profile_a = new UserProfile({id: 1, user_id: user_a.id, test: 'A'})
		user_profile_b = new UserProfile({id: 2, user_id: user_b.id, test: 'B'})
		expect(user_a.profile).toBe(user_profile_a)
		expect(user_b.profile).toBe(user_profile_b)
		expect(user_profile_a.user).toBe(user_a)
		expect(user_profile_b.user).toBe(user_b)
	})
})