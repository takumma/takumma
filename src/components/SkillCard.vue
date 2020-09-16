<template>
	<v-card
		tile
		height="128"
		width="128"
	>
		<v-card-title class="justify-center" color="softBlack">
			{{ skill }}
			<v-icon size="64" color="softBlack">{{ icon }}</v-icon>	
		</v-card-title>	
	</v-card>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
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