import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        hojichaLatte: '#C4A169',
        chocorate: '#524900',
        softBlack: '#555555',

        accent: colors.cyan.accent1,
      }
    }
  },
  icons: {
    iconfont: 'md',
  }
});
