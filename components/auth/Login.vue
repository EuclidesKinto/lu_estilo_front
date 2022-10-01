<template>
  <div class="w-full px-6 py-8 text-black bg-white rounded shadow-md">
        <h1 class="mb-8 text-3xl text-center">Entrar</h1>


        <input
          type="text"
          class="block w-full p-3 mb-4 border rounded border-grey-light"
          name="email"
          placeholder="E-mail" />

        <input
          type="password"
          class="block w-full p-3 mb-4 border rounded border-grey-light"
          name="password"
          placeholder="Senha" />

        <button
          type="submit"
          class="w-full py-3 my-1 text-center text-white bg-green-500 rounded hover:bg-green-dark focus:outline-none"
        >Entrar</button>


      </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

  })
</script>

<style scoped>

</style>
