<template>
  <v-app-bar app :color="mainColor">
    
    <v-toolbar-title :class="contentsColor+'--text text-h5'">{{ userName }}</v-toolbar-title>

  </v-app-bar>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  props: {
    userName: String,
    mainColor: String,
    contentsColor: String,
  }
});
</script>