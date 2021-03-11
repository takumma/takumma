<template>
	<v-list class="product-list align-center justify-center">
		<v-list-item
			:cols="products.length"
			v-for="product in products"
			:key="product.name"
			class="pa-3 justify-center"
		>
			<product-list-card :product="product"/>
		</v-list-item>
	</v-list>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductListCard from '../components/ProductListCard.vue';


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
	icon: string;
  color: string;
  url: string;
}


@Component({
	components: {
		ProductListCard,
	},
})
export default class SkillList extends Vue{	
	@Prop()
	products!: Array<Product>;
}
</script>

<style scoped>
.product-list {
  background-color: #eae2d7;
}
</style>