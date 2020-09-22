<template>
    <v-list-item-content>
      <v-list-item-title class="text-h5 chocorate--text"><span class="font-weight-bold">{{ title }}:</span> {{ value }}</v-list-item-title>
    </v-list-item-content>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    value: String,
  }
})
</script>