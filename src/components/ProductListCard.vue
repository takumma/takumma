<template>
	<v-card
		tile
		width="800"
		elevation="2"
		class="px-3"
	>
		<v-list-item three-line>
			<v-list-item-content class="text-left">
				<v-list-item-title class="text-h4 mb-4"> {{ name }} </v-list-item-title>
				<v-list-item-subtitle class="text-body-1 mr-3 mb-3 ml-6 font-weight-black"> {{ memo }} </v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>

		<v-card-actions>
			<text-button-toggle
				:github="github"
				:url="url"
				:links="links"
			/>
		</v-card-actions>
	</v-card>
</template>

<script lang='ts'>
import Vue from 'vue';
import TextButtonToggle from '../components/TextButtonToggle.vue';

export default Vue.extend({
	props: {
		name: String,
		tech: String,
		github: String,
		url: String,
		memo: String,
		links: Array,
	},
	components: {
		TextButtonToggle,
	}
});
</script>