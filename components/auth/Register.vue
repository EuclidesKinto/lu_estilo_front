<template>
  <form  @submit.prevent="onRegister" class="w-full px-6 py-8 text-black bg-white rounded shadow-md">
        <h1 class="mb-8 text-3xl text-center">Cadastre-se</h1>
        <input
          type="text"
          class="block w-full p-3 mb-4 border rounded border-grey-light"
          v-model="name"
          placeholder="Nome" />

        <input
          type="text"
          class="block w-full p-3 mb-4 border rounded border-grey-light"
          v-model="email"
          placeholder="E-mail" />

        <input
          type="password"
          class="block w-full p-3 mb-4 border rounded border-grey-light"
          v-model="password"
          placeholder="Senha" />
        <input
          type="password"
          class="block w-full p-3 mb-4 border rounded border-grey-light"
          v-model="confirm_password"
          placeholder="Confirme a Senha" />

            <button v-if="password == confirm_password && confirm_password.length >= 6" type="submit" class="w-full py-3 my-1 text-center text-white bg-green-500 rounded hover:bg-green-dark focus:outline-none"
          >
            Criar Conta
          </button>
            <div v-else class="w-full py-3 my-1 italic text-center text-gray-200 bg-gray-400 rounded focus:outline-none"
          >
            Criar Conta
          </div>

      </form>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {userRegister} from  '@/store'

  export default Vue.extend({
    data(){
      return {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
      }
    },
    methods:{
      async onRegister(res: any){
        try {
            await userRegister.create({
            name: this.name,
            email: this.email,
            password: this.password
          })
          this.$router.push({path: "login"})
        } catch (error) {
          this.$notify({
            type: 'error',
            text: 'Opss...'
          })
        }
      }
    }
  })
</script>

<style scoped>

</style>
