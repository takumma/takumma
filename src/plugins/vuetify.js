import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.lime.darken4,
        // TODO: set secondary #524900
        accent: colors.white,
      }
    }
  }
});
