<template>
  <div class="text-h4 secondary--text text-decoration-underline">{{ title }}</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class TitleText extends Vue {
  @Prop(String)
  readonly title!: string;
}
</script>