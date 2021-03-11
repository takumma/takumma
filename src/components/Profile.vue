<template>
  <div>
    <v-list class="profile-list">
      <v-list-item
        v-for="item in profiles"
        :key="item.name"
      >
        <profile-list-item :item="item"/>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProfileListItem from '../components/ProfileListItem.vue';

interface ProfileItem {
  name: string;
  values: Array<string>;
}

@Component({
  components: {
    ProfileListItem,
  }
})
export default class Profile extends Vue{
  @Prop(Array)
  readonly profiles!: Array<ProfileItem>
}
</script>

<style scoped>
.profile-list {
  background-color: #eae2d7;
}
</style>