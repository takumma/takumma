<template>
  <v-app-bar
    app
    color="secondary"
    class="text-center px-3"
  >
    <v-toolbar-title class="white--text text-h5">
      <v-avatar
        size="36"
        class="mr-1"
      >
        <img src="../assets/logo.svg" alt="logo"/>
      </v-avatar>
      takumma
    </v-toolbar-title>
    <v-spacer/>
    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon class="white--text">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="el in elements"
          :key="el"
        >
          <v-list-item-title>
            <a
              class="secondary--text"
              href="#"
              v-scroll-to="{ el: '#' + el, offset: -100, duration: 2000 }"
            >
              {{ el.toUpperCase() }}
            </a></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ToolBar extends Vue {
  elements: string[] = [
    "profiles",
    "skills",
    "products",
    "activities",
    "links"
  ]
}
</script>