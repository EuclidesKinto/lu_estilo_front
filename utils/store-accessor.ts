import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Shirts from '@/store/shirts'

let shirts: Shirts

function initializeStores(store: Store<any>): void {
  shirts = getModule(Shirts, store)
}

export { initializeStores, shirts }
