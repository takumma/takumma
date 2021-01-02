<template>
  <v-btn
      fab
      dark
      :color="link.color"
      :href="link.url"
      small
  >
    <v-icon
      v-if="link.icon"
      dark
    >
      {{ link.icon }}
    </v-icon>
    <span
      v-if="link.name"
      class="btn-text"
    >
      {{ link.name.slice(0, 1).toUpperCase()}}
    </span>
  </v-btn>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

interface Link {
  icon: string;
  color: string;
  url: string;
}

@Component
export default class LinkButton extends Vue {
  @Prop()
  readonly link!: Link;
}
</script>

<style scoped>
.btn-text {
  font-size: 1.4em;
}

</style>