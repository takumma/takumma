<template>
	<div class="product-list">
		<v-list class="align-center justify-center">
			<v-list-item
				:cols="products.length"
				v-for="product in products"
				:key="product.name"
				class="pa-3 justify-center"
			>
				<product-list-card
					:name="product.name"
					:techs="product.techs"
					:memo="product.memo"
					:links="product.links"
				/>
			</v-list-item>
		</v-list>
	</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductListCard from '../components/ProductListCard.vue';

@Component({
	components: {
		ProductListCard,
	},
})
export default class SkillList extends Vue{	
	@Prop()
	products: any;
	others: any;
}
</script>