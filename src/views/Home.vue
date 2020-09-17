<template>
  <div class="home">
    
    <h1 style="text-align: center;">SKILLS</h1>
    <skill-list></skill-list>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import SkillList from '../components/SkillList.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    SkillList,
  },
})
</script>
