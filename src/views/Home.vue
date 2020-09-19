<template>
  <div class="home">
    
    <h1>SKILLS</h1>
    <skill-list></skill-list>
    <h1>PRODUCTS</h1>
    <product-list-card
      name="hoge"
      memo="hogehoge"
    />

  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import SkillList from '../components/SkillList.vue'
import ProductListCard from '../components/ProductListCard.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    SkillList,
    ProductListCard
  },
})
</script>
