<template>
  <div :class="`text-h4 ${color}--text text-decoration-underline`">{{ title }}</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class TitleText extends Vue {
  @Prop(String)
  readonly title!: string;
  @Prop({ type: String, default: "secondary"})
  readonly color!: string;
}
</script>
