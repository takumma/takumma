<template>
  <v-icon dark>{{ icon }}</v-icon>
</template>

<script lang="ts">
import "@/assets/icomoon/style.css";
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class VIconIcomoon extends Vue {
  @Prop(String)
  readonly icon!: string;
}
</script>

<style scoped>

</style>