<template>
  <v-app-bar app color="hojicha_latte" class="white--text">
    
    <v-toolbar-title>{{ name }}</v-toolbar-title>

    <v-spacer/>
    
    <v-app-bar-nav-icon color="white"/>

  </v-app-bar>
</template>

<script>

export default {
  components: {
    
  },

  data() {
    return {
      name: 'takumma'
    }
  }
};
</script>