<template>
	<v-btn
			text
			color="chocorate"
			:href="link"
		>
			<v-icon
				class="mr-1"
				color="chocorate"
			>
				{{ icon }}
			</v-icon>
			{{ text }}
		</v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		icon: String,
		text: String,
		link: String,
	}
})
</script>