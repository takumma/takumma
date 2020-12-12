<template>
  <div class="home text-center mt-12 px-8">
    
    <title-text title="PROFILES"/>
    <profile
      class="mb-12 mt-4"
      :profiles="data.profiles"
    />
    <title-text title="SKILLS"/>
    <skill-list
      class="mb-12 mt-4"
      :skills="data.skills"
    />
    <title-text title="PRODUCTS"/>
    <product-list
    class="mb-12 mt-4"
      :products="data.products.products"
    />
    <title-text title="ACTIVITIES"/>
    <timeline
      class="mb-12 mt-4"
      :activities="data.activities"
    />
    <link-button-toggle :links="data.links"/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import TitleText from '../components/TitleText.vue';
import Profile from '../components/Profile.vue';
import SkillList from '../components/SkillList.vue';
import ProductList from '../components/ProductList.vue';
import Timeline from '../components/Timeline.vue';
import data from '../assets/data/data.json';
import LinkButtonToggle from "@/components/LinkButtonToggle.vue";

@Component({
  components: {
    LinkButtonToggle,
    TitleText,
    Profile,
    SkillList,
    ProductList,
    Timeline,
  }
})
export default class Home extends Vue{
  data: any = data;
}
</script>
