<template>
  <div class="home">
    <skill-card skill="Vue.js" icon="mdi-vuejs"/>
  </div>
</template>

<script>
import SkillCard from '../components/SkillCard.vue';

export default {
  name: 'Home',
  components: {
    SkillCard,
  }
}
</script>
