<template>
  <v-chip
    class="ml-2 my-auto chocorate chocorate--text"
    outlined
  >
    <v-icon class="mr-1">{{ tech.icon }}</v-icon>
    {{ tech.name}}
  </v-chip>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tech: Object,
  }
})
</script>