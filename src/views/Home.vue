<template>
  <div class="home">
    
    <h1>SKILLS</h1>
    <skill-list :skills="data.skills"/>
    <h1>PRODUCTS</h1>
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
