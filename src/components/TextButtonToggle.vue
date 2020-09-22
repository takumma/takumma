<template>
	<v-btn-toggle class="ml-auto mr-2">
		<text-button
			class="mr-4"
			v-for="link in links"
			:key="link.name"
			:btnText="link.name"
			:icon="link.icon"
			:url="link.url"
		/>
	</v-btn-toggle>
</template>

<script lang="ts">
import Vue from 'vue'
import TextButton from '../components/TextButton.vue'

export default Vue.extend({
	props: {
		links: Array,
	},
	components: {
		TextButton,
	}
})
</script>