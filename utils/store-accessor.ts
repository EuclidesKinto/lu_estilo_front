import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Shirts from '@/store/shirts'
import Auth from '@/store/auth'
import UserRegister from  '~/store/user'

let shirts: Shirts
let userRegister: UserRegister
let auth: Auth

function initializeStores(store: Store<any>): void {
  shirts = getModule(Shirts, store)
  userRegister = getModule(UserRegister, store)
  auth = getModule(Auth, store)
}

export { initializeStores, shirts, userRegister, auth }
