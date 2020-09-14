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
import ToolBar from './components/ToolBar.vue'

export default {
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
};
</script>