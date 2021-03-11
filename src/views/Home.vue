<template>
  <div class="home text-center">
    <div class="pt-12 px-8">
      <title-text title="PROFILES" id="profiles"/>
      <profile
        class="mb-12 mt-4"
        :profiles="data.profiles"
      />
      <title-text title="SKILLS" id="skills"/>
      <skill-list
        class="mb-12 mt-4"
        :skills="data.skills"
      />
      <title-text title="PRODUCTS" id="products"/>
      <product-list
        class="mb-12 mt-4"
        :products="data.products"
      />
      <title-text title="ACTIVITIES" id="activities"/>
      <timeline
        class="mb-12 mt-4"
        :activities="data.activities"
      />
    </div>
    <div class="footer">
      <img class="footer-logo" src="../assets/footer-logo.png" alt="footer-logo">
      <div class="link-block">
        <title-text title="LINKS" id="links" color="white"/>
        <link-button-toggle
          class="mb-12 mt-4"
          :links="data.links"
        />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';
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
export default class Home extends Vue {
  data: any = data;
}
</script>

<style scoped>
.home {
  background-color: #eae2d7;
}

.link-block {
  margin: -150px;
  bottom: 0;
}

.footer-logo {
  width: 100%;
  vertical-align: top;
}
</style>
