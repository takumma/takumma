<template>
  <v-app>
    <tool-bar
      :userName="userName"
      :mainColor="AppBarMainColor"
      :contentsColor="AppBarContentsColor"
    />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue';
import ToolBar from './components/ToolBar.vue'

export default Vue.extend({
  components: {
    ToolBar,
  },
  data() {
    return {
      userName: 'takumma',
      AppBarMainColor: 'hojichaLatte',
      AppBarContentsColor: 'white'
    }
  }
});
</script>