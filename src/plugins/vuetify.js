import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { getEventOrDefaultTheme } from './themes.js';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: getEventOrDefaultTheme(),
    }
  },
  icons: {
    iconfont: 'md',
  }
});
