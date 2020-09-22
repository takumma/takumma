<template>
  <div>
    <v-list>
      <v-list-item
        v-for="item in listItem"
        :key="item.name"
      >
        <profile-list-item />
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProfileListItem from '../components/ProfileListItem.vue';
export default Vue.extend({
  components: {
    ProfileListItem,
  },
  props: {
    profiles: Object,
  },
  data() {
    listItem: [
      { name: "NICKNAME", value: this.profiles.nickname },
      { name: "REAL-NAME", value: this.profiles.real-name },
      { name: "BIRTHDAY", value: this.profiles.birthday },
      { name: "BELONG", value: this.profiles.belong },
      { name: "INTEREST", value: this.profiles.interest },
    ]
  }
})
</script>