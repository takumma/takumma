<template>
  <v-btn>link</v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Link {
	icon: string;
  color: string;
  url: string;
}

@Component
export default class LinkButton extends Vue{
  @Prop()
  readonly link!: Link;
}
</script>