<template>
	<v-card
		tile
		height="150"
		width="150"
		elevation="2"
	>
	</v-card>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
	props: {
		name: String,
		tech: String,
		github: String,
		url: String,
		memo: String
	}
});
</script>