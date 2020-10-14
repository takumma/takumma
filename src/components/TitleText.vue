<template>
  <div class="text-h3 chocolate--text">{{ title }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
  }
})
</script>