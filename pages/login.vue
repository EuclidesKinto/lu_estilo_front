<template>
  <!-- component -->
  <div class="flex flex-col min-h-screen bg-lu-estilo-color">
    <div class="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
      <Login/>
      <div class="mt-6 text-gray-200">
        Ainda não tem uma conta?
        <nuxt-link to="/register" class="text-gray-100 no-underline border-b border-blue">Cadastrar</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '~/components/auth/Login.vue';
export default {
    name: "login",
    components: { Login },
    middleware: 'guest',
}
</script>

<style scoped>

</style>
