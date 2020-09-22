<template>
	<v-card
		tile
		width="800"
		elevation="2"
		class="px-3"
	>
		<v-list-item>
			<v-list-item-content class="text-left">
				<v-list-item-title class="text-h4 chocorate--text mb-4 d-inline-flex">
					{{ name }}
					<v-chip
						class="ml-2 my-auto"
						v-for="tech in techs"
						:key="tech"
					>
						<v-icon class="mr-1">{{ tech.icon }}</v-icon>
						{{ tech.name}}
					</v-chip>
				</v-list-item-title>
				<v-list-item-subtitle class="wrap-text text-body-1 mr-3 mb-3 ml-6 font-weight-black">
					{{ memo }}
				</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>

		<v-card-actions>
			<text-button-toggle
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
		techs: Array,
		memo: String,
		links: Array,
	},
	components: {
		TextButtonToggle,
	}
});
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>