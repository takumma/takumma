<template>
  <div class="skill-list">
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          xs="12" sm="4" md="3" lg="2"
          :cols="skills.length"
          v-for="skill in skills"
          :key="skill.name"
          align="center"
        >
          <skill-list-card
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
import SkillListCard from '../components/SkillListCard.vue';

export default Vue.extend({
  components: {
    SkillListCard,
  },
  props: {
    skills: [],
  },
})
</script>