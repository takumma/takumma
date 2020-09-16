<template>
<v-hover
  v-slot:default="{ hover }"
>
	<v-card
		tile
		height="128"
		width="128"
		:elevation="hover ? 8 : 2"
	>
		<v-card-title class="justify-center" color="softBlack">
			{{ skill }}
			<v-icon size="64" color="softBlack">{{ icon }} {{hover ? 'mdi-spin' : '' }}</v-icon>	
		</v-card-title>
	</v-card>
</v-hover>
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