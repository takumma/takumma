<template>
	<v-btn
			text
			color="chocolate"
			:href="url"
		>
			<v-icon
				class="mr-1"
				color="chocolate"
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
		url: String,
	}
})
</script>