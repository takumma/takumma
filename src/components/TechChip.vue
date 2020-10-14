<template>
  <v-chip
    class="ml-2 my-auto chocolate chocolate--text"
    outlined
  >
    <v-icon :class="$vuetify.breakpoint.xs ? '' : 'mr-1'">{{ tech.icon }}</v-icon>
    {{ $vuetify.breakpoint.xs ? '' : tech.name }}
  </v-chip>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tech: Object,
  },
})
</script>