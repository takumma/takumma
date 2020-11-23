<template>
    <v-list-item-content>
      <v-list-item-title class="wrap-text text-h5 chocolate--text font-weight-bold">
        {{ item.name }}:
      </v-list-item-title>
      <div
        class="text-h6 font-weight-regular"
        v-for="value in item.values"
        :key="value"
      >
        {{ value }}
      </div>
    </v-list-item-content>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface ProfileItem {
  name: string;
  values: Array<string>;
}

@Component
export default class ProfileListItem extends Vue{
  @Prop()
  readonly item!: ProfileItem
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>