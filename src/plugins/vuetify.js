import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        hojicha_latte: '#C4A169',
        chocorate: '#524900',
        soft_black: '#242323',

        accent: colors.cyan.accent1,
      }
    }
  }
});
