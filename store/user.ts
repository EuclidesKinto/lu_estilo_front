import { Action, Module, VuexModule } from 'vuex-module-decorators';
import { $axios } from "@/utils/nuxt-instance";

interface Create{
  name: string
  email: string
  password: string
}

@Module({name: 'user', stateFactory:true, namespaced:true})
export default class UserRegister extends VuexModule {

  @Action
  public async create(payload: Create){
    await $axios.$post('/auth/register', payload)
  }
  // @Action
  // public async login(payload: Create){
  //   await $axios.$post('/auth/login', payload)
  // }
}
