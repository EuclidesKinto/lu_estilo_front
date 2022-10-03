<template>
  <NuxtLink :to="`/shirt/${shirt.id}`" >

    <div class="relative group">
      <div class="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img :src="image" alt="shirt.name" class="object-cover object-center w-full h-full lg:h-full lg:w-full">
      </div>
      <div class="flex justify-between mt-4">
        <div>
          <h3 class="text-sm text-white">
              <span aria-hidden="true" class="absolute inset-0"></span>
              {{shirt.name}}
          </h3>
          <div class="flex row-col gap-x-1">
          <p v-for="category in shirt.category" :key="category.id" class="mt-1 text-xs italic text-white">{{ category.name }}</p>
          </div>
        </div>
        <p class="text-sm font-medium text-white">R$ {{shirt.price}}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import {Shirt} from '@/models'

export default Vue.extend({
  data(){
    return {
      image: 'http://localhost/storage/'+ this.shirt.image
    }
  },
    name: "ShirtCard",
    props: {
      shirt: {
        type: Object,
        required: true
      } as PropOptions<Shirt>
    }
  })
</script>

<style scoped>

</style>
