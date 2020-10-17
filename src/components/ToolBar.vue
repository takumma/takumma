<template>
  <v-app-bar app :color="mainColor">
    
    <v-toolbar-title :class="contentsColor+'--text text-h5'">{{ userName }}</v-toolbar-title>

  </v-app-bar>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ToolBar extends Vue{
  @Prop(String)
  readonly userName!: string
  @Prop(String)
  readonly mainColor!: string
  @Prop(String)
  readonly contentsColor!: string
}
</script>