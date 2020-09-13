<template>
  <v-app>
    <tool-bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components: {
    ToolBar,
  },
};
</script>