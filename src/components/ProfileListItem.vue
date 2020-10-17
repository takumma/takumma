<template>
    <v-list-item-content>
      <v-list-item-title class="wrap-text text-h5 chocolate--text font-weight-bold">
        {{ title }}:
      </v-list-item-title>
      <div
        class="text-h6 font-weight-regular"
        v-for="value in values"
        :key="value"
      >
        {{ value }}
      </div>
    </v-list-item-content>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SkillList extends Vue{
  @Prop(String)
  readonly title!: String
  @Prop()
  readonly values!: any
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>