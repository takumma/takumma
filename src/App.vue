<template>
  <v-app id="app">
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
import { Component, Vue } from 'vue-property-decorator';
import 'normalize.css';
import ToolBar from './components/ToolBar.vue';

@Component({
  components: {
    ToolBar,
  },
})
export default class App extends Vue {
  userName = 'takumma';
  AppBarMainColor = 'hojichaLatte';
  AppBarContentsColor = 'white';
}
</script>