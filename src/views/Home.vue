<template>
  <div class="home text-center mt-12">
    
    <title-text title="PROFILEs"/>
    <profile
      class="mb-8"
      :profiles="data.profiles"
    />
    <title-text title="SKILLs"/>
    <skill-list
      class="mb-8"
      :skills="data.skills"
    />
    <title-text title="PRODUCTs"/>
    <product-list
      :products="data.products.products"
      :others="data.products.others"
    />

  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import TitleText from '../components/TitleText.vue';
import Profile from '../components/Profile.vue';
import SkillList from '../components/SkillList.vue';
import ProductList from '../components/ProductList.vue';
import data from '../assets/data/data.json';

export default Vue.extend({
  name: 'Home',
  components: {
    TitleText,
    Profile,
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
