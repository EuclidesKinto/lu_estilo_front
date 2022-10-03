<template>
<div  class="flex-col justify-center bg-lu-estilo-color ">

  <section class="text-gray-600 body-font">
    <div class="container px-5 pt-10 mx-auto">
      <div class="flex flex-col w-full mb-10 text-center">
        <h1 class="mb-4 text-2xl font-medium text-white title-font">CONHEÇA NOSSAS ESTAMPAS</h1>
        <p class="mx-auto text-base leading-relaxed text-white lg:w-2/3">Camisetas para uniformização, divulgação de marcas e realização de eventos é um recurso importante para o marketing.</p>

      </div>
      <div class="flex justify-center mt-0">
        <div class="inline-flex w-16 h-1 bg-white rounded-full"></div>
      </div>
      <div class="">
        <div class="max-w-2xl px-4 py-5 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

          <div class="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ShirtCard v-for="shirt in $shirts" :key="shirt.id" :shirt="shirt"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Contato/>
</div>
</template>

<script>
import {shirts} from "@/store";
import  ShirtCard from "@/components/Shirt/ShirtCard"


export default {
  name: "Home",
  components: {ShirtCard},
  computed:{
    $shirts() {
      console.log(shirts.$all)
      return shirts.$all
    }
  }

}
</script>

<style scoped>

</style>
