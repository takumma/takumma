<template>
  <div class="product-list">
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          :cols="products.length"
          v-for="product in products"
          :key="product.name"
        >
          <product-list-card
            :name="product.name"
            :memo="product.memo"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import ProductListCard from '../components/ProductListCard.vue';
import ProductData from '../assets/data/product.json';

export default Vue.extend({
  name: 'Home',
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