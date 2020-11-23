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
					{{ product.name }}
						<tech-chip
							v-for="(tech, index) in product.techs"
							:key="index"
							:tech="tech"
							:class="index == 0 ? 'ml-6' : 'ml-2'"
						/>
				</v-list-item-title>
				<v-list-item-subtitle class="wrap-text text-body-1 mr-3 mb-3 ml-6 font-weight-bold">
					{{ product.memo }}
				</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>

		<v-card-actions>
			<text-button-toggle
				:links="product.links"
			/>
		</v-card-actions>
	</v-card>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import TechChip from '../components/TechChip.vue';
import TextButtonToggle from '../components/TextButtonToggle.vue';

interface Product {
	name: string;
	techs: Array<Tech>;
	links: Array<Link>;
	memo: string;
}

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
	@Prop()
	readonly product!: Product;
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>