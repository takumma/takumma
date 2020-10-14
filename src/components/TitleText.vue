<template>
  <div class="text-h3 chocolate--text">{{ title }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ToolBar extends Vue{
  @Prop(String)
  readonly title!: string;
}
</script>