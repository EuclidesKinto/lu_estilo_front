import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import  {$axios, $cookies} from '@/utils/nuxt-instance'

interface CreatePayload {
  email: string
  password:string
}

interface UpdatePayload{
  token?: string
}

type Token = string | null

@Module({ name: 'auth', stateFactory: true, namespaced: true})
export default class Auth extends VuexModule {
  private token = null as Token

  public get $token(): any{
    return this.token
  }

  @Mutation
  private UPDATE_TOKEN(token: Token){
    this.token = token
  }

  @Action
  public async create(payload: CreatePayload){
    console.log('create')
    const { token } = await $axios.$post('/auth/login', payload)
    console.log(token)
    $cookies.set('token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30 // 30 dias
    })
    this.context.commit('UPDATE_TOKEN', token)
  }

  @Action
  public update(payload: UpdatePayload){
    const token = payload?.token ? payload.token : $cookies.get('token')
    this.context.commit('UPDATE_TOKEN', token || null)
  }

  @Action
  public  async destroy(){
    await $axios.$delete('/auth/logout')
    $cookies.remove('token')
    this.context.commit('UPDATE_TOKEN', null)
  }
}
