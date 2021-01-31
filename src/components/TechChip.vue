<template>
  <v-chip
    class="ml-2 my-auto secondary secondary--text"
    outlined
  >
    <v-icon :class="$vuetify.breakpoint.xs ? '' : 'mr-1'">{{ tech.icon }}</v-icon>
    {{ $vuetify.breakpoint.xs ? '' : tech.name }}
  </v-chip>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Tech {
	icon: string;
	name: string;
}

@Component
export default class TechChip extends Vue{
  @Prop()
  readonly tech!: Tech;
}
</script>