<template>
  <div class="home">
    <skill-card skill="Vue.js" icon="mdi-vuejs"/>
  </div>
</template>

<script>
import Vue from 'vue';
import SkillCard from '../components/SkillCard.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    SkillCard,
  }
})
</script>
