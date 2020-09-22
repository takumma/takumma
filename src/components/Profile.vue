<template>
  <div>
    <v-list>
      <v-list-item
        v-for="item in listItems"
        :key="item.name"
      >
        <profile-list-item :title="item.name" :value="item.value"/>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5 chocorate--text font-weight-bold">INTEREST:</v-list-item-title>
          <div
            class="text-h5 chocorate--text"
            v-for="interest in profiles.interests"
            :key="interest"
          >
            {{ interest }}
          </div>
        </v-list-item-content>
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
    return {
      listItems: [
        { name: "NICKNAME", value: this.profiles.nickname },
        { name: "REAL-NAME", value: this.profiles.real_name },
        { name: "BIRTHDAY", value: this.profiles.birthday },
        { name: "BELONG", value: this.profiles.belong },
      ],
    }
  }
})
</script>