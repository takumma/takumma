<template>
    <v-list-item-content>
      <v-list-item-title class="wrap-text text-h5 chocorate--text font-weight-bold">
        {{ title }}:
      </v-list-item-title>
      <div
        class="text-h5 chocorate--text"
        v-for="value in values"
        :key="value"
      >
        {{ value }}
      </div>
    </v-list-item-content>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    values: Array,
  }
})
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>