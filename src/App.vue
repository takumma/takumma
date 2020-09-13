<template>
  <v-app>
    <v-app-bar app color="hojicha_latte" class="white--text">
      
      <v-toolbar-title>takumma</v-toolbar-title>

      <v-spacer/>
      
      <v-app-bar-nav-icon color="white"/>

    </v-app-bar>
    
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  components: {
  },

  data() {
    
  }
};
</script>