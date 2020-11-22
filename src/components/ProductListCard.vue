<template>
	<v-card
		tile
		width="800"
		elevation="2"
		class="px-3"
	>
		<v-list-item>
			<v-list-item-content class="text-left">
				<v-list-item-title class="text-h4 chocolate--text mb-4 d-inline-flex">
					{{ name }}
						<tech-chip
							v-for="(tech, index) in techs"
							:key="index"
							:tech="tech"
							:class="index == 0 ? 'ml-6' : 'ml-2'"
						/>
				</v-list-item-title>
				<v-list-item-subtitle class="wrap-text text-body-1 mr-3 mb-3 ml-6 font-weight-bold">
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import TechChip from '../components/TechChip.vue';
import TextButtonToggle from '../components/TextButtonToggle.vue';


interface Tech {
	icon: string;
	name: string;
}

interface Link {
	name: string;
	icon: string;
	url: string;
}

@Component({
	components: {
		TechChip,
		TextButtonToggle,
	},
})
export default class ProductListCard extends Vue{	
	@Prop(String)
	readonly name!: string;
	@Prop()
	techs!: Array<Tech>;
	@Prop(String)
	readonly memo!: string;
	@Prop()
	links!: Array<Link>;
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>