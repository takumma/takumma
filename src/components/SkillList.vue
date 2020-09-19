<template>
  <div class="skill-list">
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          xs="5" sm="4" md="3" lg="2" xl="1"
          :cols="skills.length"
          v-for="skill in skills"
          :key="skill.name"
        >
          <skill-card
            :skill="skill.name"
            :icon="skill.icon"
            :color="skill.color"
          />
        </v-col>
      </v-row>
    </v-container>
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