<template>
  <div class="home text-center mt-12 px-8">
    
    <title-text title="PROFILES"/>
    <profile
      class="mb-8"
      :profiles="data.profiles"
    />
    <title-text title="SKILLS"/>
    <skill-list
      class="mb-8"
      :skills="data.skills"
    />
    <title-text title="PRODUCTS"/>
    <product-list
      :products="data.products.products"
      :others="data.products.others"
    />
    <title-text title="ACTIVITIES"/>
    <timeline :activities="data.activities"/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import TitleText from '../components/TitleText.vue';
import Profile from '../components/Profile.vue';
import SkillList from '../components/SkillList.vue';
import ProductList from '../components/ProductList.vue';
import Timeline from '../components/Timeline.vue';
import data from '../assets/data/data.json';

export default Vue.extend({
  name: 'Home',
  components: {
    TitleText,
    Profile,
    SkillList,
    ProductList,
    Timeline,
  },
  data() {
    return {
      data: data,
    }
  },
})
</script>
