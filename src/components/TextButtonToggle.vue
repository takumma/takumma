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
		<text-button
			class="mr-4"
			icon="mdi-github"
			btnText="GITHUB"
			:url="github"
		/>
		<text-button
			class="mr-4"
			icon="mdi-link"
			btnText="SITE LINK"
			:url="url"
		/>
	</v-btn-toggle>
</template>

<script lang="ts">
import Vue from 'vue'
import TextButton from '../components/TextButton.vue'

export default Vue.extend({
	props: {
		github: String,
		url: String,
		links: Array,
	},
	components: {
		TextButton,
	}
})
</script>