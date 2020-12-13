<template>
  <v-btn
      fab
      dark
      :color="link.color"
      :href="link.url"
  >
    <v-icon
      dark
      x-large
    >
      {{ link.icon }}
    </v-icon>
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