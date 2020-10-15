<template>
  <div>
    <v-list>
      <v-list-item
        v-for="item in profiles"
        :key="item.name"
      >
        <profile-list-item
          :title="item.name"
          :values="item.values"
        />
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProfileListItem from '../components/ProfileListItem.vue';

@Component({
  components: {
    ProfileListItem,
  }
})
export default class Profile extends Vue{
  @Prop(Array)
  readonly profiles!: any
}
</script>