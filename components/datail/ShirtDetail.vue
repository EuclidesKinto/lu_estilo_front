<template>

</template>

<script lang="ts">
import Vue from "vue";
import {shirts} from "@/store";
export default Vue.extend({
  name: "ShirtDetail",

  computed: {
    $shirt() {
      console.log(shirts.$single)
      console.log('ok')
    }
  }
})
</script>

<style scoped>

</style>
