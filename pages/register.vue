<template>
  <!-- component -->
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Cadastre-se</h1>
        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Nome" />

        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="E-mail" />

        <input
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Senha" />
        <input
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="confirm_password"
          placeholder="Confirme a Senha" />

        <button
          type="submit"
          class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
        >Criar Conta</button>


      </div>

      <div class="text-gray-500 mt-6">
        Já tem uma conta?
        <nuxt-link to="/login" class="no-underline border-b border-blue text-gray-500">Login</nuxt-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>

</style>
