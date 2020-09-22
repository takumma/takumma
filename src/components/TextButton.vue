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
			{{ btnText }}
		</v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		icon: String,
		btnText: String,
		link: String,
	}
})
</script>