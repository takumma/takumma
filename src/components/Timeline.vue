<template>
  <div class="timeline">
    <v-timeline
      v-resize="onResize"
      :dense="windowSize.x <= 600"
    >
      <v-timeline-item
        v-for="(activity, i) in activities"
        :key="i"
        color="chocolate"
        :icon="activity.icon"
        fill-dot
      >
        <template v-if="windowSize.x > 600" v-slot:opposite>
          <span
            class="chocolate--text text-body-1"
            v-text="activity.time_stamp"
          ></span>
        </template>
        <v-card class="pa-4 text-left">
          <v-card-title class="font-weight-regular">
            {{ activity.title }}
          </v-card-title>
          <v-card-text class="font-weight-regular text-body-2">
            {{ activity.memo }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Timeline extends Vue{
  @Prop(Array)
  readonly activities!: any

  windowSize: object =  {
    x: 0,
    y: 0,
  }

  onResize() {
    this.windowSize = { x: window.innerWidth, y: window.innerHeight };
  }

  mounted() {
    this.onResize();
  }
}
</script>