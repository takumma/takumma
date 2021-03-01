<template>
  <div class="font-weight-bold accent--text text-h4  pa-12">
    Today is {{ event_name }}!!
    {{ event_text }}
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class EventText extends Vue {
  @Prop()
  readonly event_name!: string;
  @Prop()
  readonly event_text!: string;
}
</script>