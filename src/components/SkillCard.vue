<template>
	<v-card>
		<v-card-title>{{ skill }}</v-card-title>
		<v-icon>{{ icon }}</v-icon>
	</v-card>
</template>

<script>

export default {
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
};
</script>