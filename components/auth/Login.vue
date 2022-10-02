<template>
  <form  @submit.prevent="onLogin" class="w-full px-6 py-8 text-black bg-white rounded shadow-md">
        <h1 class="mb-8 text-3xl text-center">Entrar</h1>
          <input type="text" class="block w-full p-3 mb-4 border rounded border-grey-light" v-model="email" placeholder="E-mail" />

        <input type="password" class="block w-full p-3 mb-4 border rounded border-grey-light"
          v-model="password"
          placeholder="Senha" />

          <button v-if="password.length >= 6 && email.length >= 3"
              type="submit" class="w-full py-3 my-1 text-center text-white bg-green-500 rounded hover:bg-green-dark focus:outline-none">
            Entrar
          </button>
          <div v-else class="w-full py-3 my-1 italic text-center text-gray-200 bg-gray-400 rounded focus:outline-none">
            Entrar
          </div>
  </form>
</template>

<script>
  import Vue from 'vue'
  import {auth,} from '@/store'

  export default Vue.extend({
    data(){
      return {
        email: '',
        password: '',
      }
    },
    methods:{
      async onLogin(){
        try {
          await auth.create({
            email: this.email,
            password: this.password
          })
          console.log('ok')
          this.$router.push({path:'register'})
        } catch {

        }
      }
    }
  })
</script>

<style scoped>

</style>
