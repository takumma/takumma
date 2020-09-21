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
			<v-btn-toggle class="text-right mx-2">
				<v-btn text>
					<v-icon class="mr-1">mdi-github</v-icon>
					github
				</v-btn>
				<v-btn text>
					<v-icon class="mr-1">mdi-link</v-icon>
					SITE URL
				</v-btn>
			</v-btn-toggle>
		</v-card-actions>
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