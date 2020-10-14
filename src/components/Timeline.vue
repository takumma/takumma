<template>
  <div class="timeline">
    <v-timeline>
      <v-timeline-item
        v-for="(activity, i) in activities"
        :key="i"
        color="chocolate"
        small
      >
        <template v-slot:opposite>
          <span
            class="chocolate--text"
            v-text="activity.time_stamp"
          ></span>
        </template>
        <v-card class="pa-4">
          <v-card-title class="font-weight-regular">
            {{ activity.title }}
          </v-card-title>
          <div>
            {{ activity.memo }}
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    activities: Array
  }
})
</script>