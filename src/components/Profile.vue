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
import Vue from 'vue'
import ProfileListItem from '../components/ProfileListItem.vue';
export default Vue.extend({
  components: {
    ProfileListItem,
  },
  props: {
    profiles: Array,
  },
})
</script>