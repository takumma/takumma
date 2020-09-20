<template>
	<div class="product-list">
		<v-list
			align="center"
			justify="center"
		>
			<v-list-item
				:cols="products.length"
				v-for="product in products"
				:key="product.name"
				class="pa-3 justify-center"
			>
				<product-list-card
					:name="product.name"
					:memo="product.memo"
				/>
			</v-list-item>
		</v-list>
	</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import ProductListCard from '../components/ProductListCard.vue';
import ProductData from '../assets/data/product.json';

export default Vue.extend({
	components: {
		ProductListCard,
	},
	data() {
		return {
			products: ProductData.products,
			others: ProductData.others,
		}
	}
})
</script>