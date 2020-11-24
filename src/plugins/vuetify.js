import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { themes } from './themes.js';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: themes.default,
    }
  },
  icons: {
    iconfont: 'md',
  }
});
