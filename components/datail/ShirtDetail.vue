<template>
  <div class="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
    <img class="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6"
          :alt="$shirt.name"
          :src="image+$shirt.image">
    <div class="w-full text-center lg:w-2/3">
      <h1 class="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">{{$shirt.name}}</h1>
      <p class="mb-8 leading-relaxed">R$ {{$shirt.price}}</p>
      <div class="flex-col justify-center">
        <div class="flex justify-center my-3 row-col gap-x-1">
          <p v-for="category in $shirt.category" :key="category.id" class="mt-1 text-xs italic text-white">{{ category.name }}</p>
          </div>
        <div @click="onBuy" v-if="buy == false" class="inline-flex px-6 py-2 text-lg text-white bg-green-500 border-0 rounded cursor-pointer focus:outline-none hover:bg-green-600">Comprar</div>
        <div  v-else class="inline-flex px-6 py-2 text-lg text-gray-500 bg-white border-0 rounded cursor-pointer focus:outline-none hover:bg-gray-100">Obrigado por comprar na Lu Estilo</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {shirts } from "@/store";
import { Shirt } from "~/models";
export default Vue.extend({
  name: "ShirtDetail",
  data(){
    return {
      buy: false,
      image: 'http://localhost/storage/'
    }
  },
  methods:{
    onBuy(): boolean{
      return this.buy = true
    }
  },
  computed: {
    $shirt(): Shirt {
      console.log(shirts.$single)
      return shirts.$single
    }
  }
})
</script>

<style scoped>

</style>
