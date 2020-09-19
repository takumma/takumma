<template>
	<v-card
		tile
		width="800"
		elevation="2"
	>
		<v-card-title> {{ name }} </v-card-title>
		<v-card-text>
			{{ memo }}
		</v-card-text>
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