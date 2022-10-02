<template>
  <nav class="py-5 bg-blue-500">
    <div class="container flex ">
      <div class="flex items-center justify-between flex-grow px-3">
        <div class="flex flex-wrap space-x-3 capitalize md:items-center md:flex-no-wrap">
          <a href="/" class="text-gray-200 transition hover:text-white hover:underline">Camisetas</a>
          <a href="" class="text-gray-200 transition hover:text-white hover:underline">Abadás</a>
          <a href="#" class="text-gray-200 transition hover:text-white hover:underline">Uniformes</a>
        </div>
        <div v-if="!$store.state.auth.token" class="space-x-2">
<!--          if (!store.state.auth.token){-->
          <nuxt-link to="/register" class="text-gray-200 transition hover:underline hover:text-white">Cadastre-se</nuxt-link>
          <nuxt-link to="/login" class="text-gray-200 transition hover:underline hover:text-white">Login</nuxt-link>
        </div>
        <div v-else>
          <p  class="text-gray-200 transition cursor-pointer hover:underline hover:text-white">Sair</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {auth} from "~/utils/store-accessor";

export default {
  name: "Navbar",
  methods:{
    async logout(){
      try {
        await auth.destroy()
        await this.$router.push({path:'/'})
      } catch {

      }
    }
  }
}
</script>

<style scoped>

</style>
