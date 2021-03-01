<template>
  <v-app-bar
    app
    color="primary"
    class="text-center px-3"
  >
    <v-toolbar-title class="white--text text-h5">
      <v-avatar
        size="36"
        class="mr-1"
      >
        <img src="../assets/logo.svg" alt="logo"/>
      </v-avatar>
      takumma
    </v-toolbar-title>
    <v-spacer/>
    <v-app-bar-nav-icon class="white--text" />
  </v-app-bar>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ToolBar extends Vue {
}
</script>