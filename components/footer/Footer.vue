<template>
  <footer class="text-white border-t border-gray-300 bg-lu-estilo-color body-font">
    <div class="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
      <nuxt-link to="/" class="text-2xl font-bold text-white ">Lu Estilo</nuxt-link>
      <p class="mt-4 text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">© 2022 Lu Estilo —
        <a href="" class="ml-1 text-white" rel="noopener noreferrer" target="_blank">Euclides - Teste</a>
      </p>
      <span class="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
      <a class="text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-white">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>

    </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
