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
          <skill-list-card :skill="skill"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import SkillListCard from '../components/SkillListCard.vue';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

@Component({
  components: {
    SkillListCard,
  }
})
export default class SkillList extends Vue{
  @Prop()
  readonly skills!: Array<Skill>;
}
</script>