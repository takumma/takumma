<template>
  <v-app id="app">
    <tool-bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import 'normalize.css';
import ToolBar from './components/ToolBar.vue';
import "@/assets/icomoon/style.css";


@Component({
  components: {
    ToolBar,
  },
})
export default class App extends Vue {
}
</script>