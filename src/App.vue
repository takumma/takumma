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

<script>
import Vue from 'vue';
import ToolBar from './components/ToolBar.vue'

export default Vue.extend({
  components: {
    ToolBar,
  },
  data() {
    return {
      userName: String = 'takumma',
      AppBarMainColor: String =  'hojichaLatte',
      AppBarContentsColor: String = 'white'
    }
  }
});
</script>