<template>
	<div class="timeline">
		<timeline class="text-left">
    <timeline-title>title</timeline-title>
    <timeline-item bg-color="#9dd8e0">item1</timeline-item>
    <timeline-item :hollow="true">item2</timeline-item>
  </timeline>
	</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline';

export default Vue.extend({
	components: {
		Timeline,
    TimelineItem,
    TimelineTitle
	},
})
</script>