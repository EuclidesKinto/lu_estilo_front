<template>
  <Home/>
</template>

<script lang="ts">
import Vue from 'vue'
import { shirts } from '@/store'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'index-banner',
  components: {},
  data(){
    return {
      title: 'Lu Estilo | Home'
    }
  },
  head(this: any) {
    return {
      title: this.title,
    }

  },
  async asyncData() {
    await shirts.index()
  }

})
</script>
