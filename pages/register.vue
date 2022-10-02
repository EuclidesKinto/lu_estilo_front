<template>
  <!-- component -->
  <div class="flex flex-col min-h-screen bg-gray-100">
    <div class="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
      <Register/>
      <div class="mt-6 text-gray-500">
        Já tem uma conta?
        <nuxt-link to="/login" class="text-gray-500 no-underline border-b border-blue">
          Login
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Register from '~/components/auth/Register.vue';
export default {
    name: "login",
    middleware: 'guest',
    components: { Register }
}
</script>

<style scoped>

</style>
