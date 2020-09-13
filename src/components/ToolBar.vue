<template>
  <v-app-bar app :color="mainColor">
    
    <v-toolbar-title :class="contentsColor+'--text'">{{ userName }}</v-toolbar-title>

    <v-spacer/>
    
    <v-app-bar-nav-icon :color="contentsColor"/>

  </v-app-bar>
</template>

<script>

export default {
  components: {
    
  },
  props: {
    userName: String,
    mainColor: String,
    contentsColor: String,
  },
  data() {
    return {
      name: 'takumma'
    }
  }
};
</script>