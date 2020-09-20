<template>
  <div class="home">
    
    <div class="text-h3">SKILLS</div>
    <skill-list :skills="data.skills"/>
    <div class='text-h3'>PRODUCTS</div>
    <product-list></product-list>

  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import SkillList from '../components/SkillList.vue';
import ProductList from '../components/ProductList.vue';
import data from '../assets/data/data.json';

export default Vue.extend({
  name: 'Home',
  components: {
    SkillList,
    ProductList
  },
  data() {
    return {
      data: data,
    }
  },
})
</script>
