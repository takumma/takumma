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
        <div class="py-4">
          <h3 class="font-weight-light mb-4">
            {{ activity.title }}
          </h3>
          <div>
            {{ activity.memo }}
          </div>
        </div>
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