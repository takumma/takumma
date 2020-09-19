<template>
  <div class="home">
    
    <h1>SKILLS</h1>
    <skill-list></skill-list>
    <h1>PRODUCTS</h1>
    <product-card
      name="hoge"
      memo="hogehoge"
    />

  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import SkillList from '../components/SkillList.vue'
import ProductCard from '../components/ProductCard.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    SkillList,
    ProductCard
  },
})
</script>
