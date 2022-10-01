import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import  { $axios} from "@/utils/nuxt-instance";
import { Shirt } from '@/models'


interface Show {
  id: Shirt["id"]
}

@Module({name: 'shirts', stateFactory: true, namespaced: true})
export default class Shirts extends VuexModule {
  private shirts = [] as Shirt[]
  private shirt = {} as Shirt

  public get $all(){
    return this.shirts
  }

  public get $single(){
    return this.shirt
  }

  @Mutation
  private SET_ALL(shirts: Shirt[]){
    this.shirts = shirts
  }

  @Mutation
  private SET_SINGLE(shirt: Shirt){
    this.shirt = shirt
  }

  @Action
  public async index(){
    const shirts = await $axios.$get('/')
    this.context.commit('SET_ALL', shirts)
  }

  @Action
  public async show({ id }: Show){
    const shirt = await $axios.$get(`/shirt/${id}`)
    this.context.commit('SET_SINGLE', shirt)
  }
}
