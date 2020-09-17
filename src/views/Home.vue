<template>
  <div class="home">
    <v-row>
      <v-col :cols="skills.length" v-for="skill in skills" :key="skill.name">
        <skill-card :skill="skill.name" :icon="skill.icon" :color="skill.color" />
      </v-col>
    </v-row>
    <skill-card skill="Vue.js" icon="mdi-vuejs" color="green"/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import SkillCard from '../components/SkillCard.vue';
import skillData from '../assets/data/skill.json';

export default Vue.extend({
  name: 'Home',
  components: {
    SkillCard,
  },
  data() {
    return {
      skills: skillData.skills
    }
  }
})
</script>
