<template>
	<v-btn-toggle class="ml-auto mr-2">
		<text-button
			class="mr-4"
			icon="mdi-github"
			btnText="GITHUB"
			:link="github"
		/>
		<text-button
			icon="mdi-link"
			btnText="SITE LINK"
			:link="url"
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
	},
	components: {
		TextButton,
	}
})
</script>