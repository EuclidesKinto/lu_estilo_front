import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Shirts from '@/store/shirts'
import UserRegister from  '~/store/user'

let shirts: Shirts
let userRegister: UserRegister

function initializeStores(store: Store<any>): void {
  shirts = getModule(Shirts, store)
  userRegister = getModule(UserRegister, store)
}

export { initializeStores, shirts, userRegister }
