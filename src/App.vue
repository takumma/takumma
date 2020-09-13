<template>
  <v-app>
    <v-app-bar app color="primary" class="white--text">
      
      <v-toolbar-title>takumma</v-toolbar-title>

      <v-divider/>
      
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
