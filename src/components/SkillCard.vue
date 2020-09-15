<template>
	<v-card>
		<v-card-title>{{ skill }}</v-card-title>
		<v-icon>{{ icon }}</v-icon>
	</v-card>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
	components: {
	},
	props: {
		skill: String,
		icon: String,
	},
	data() {
		return {
		}
	}
});
</script>