<template>
  <div class="home text-center mt-12 px-8">

    <event
      v-if="todaysEvent"
      :event_name="todaysEvent.eventName"
      :event_text="todaysEvent.text"
    />

    <title-text title="PROFILES" id="profiles"/>
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
      :products="data.products"
    />
    <title-text title="ACTIVITIES"/>
    <timeline
      class="mb-12 mt-4"
      :activities="data.activities"
    />
    <title-text title="LINKS"/>
    <link-button-toggle
      class="mb-12 mt-4"
      :links="data.links"
    />
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
import EventText from "@/components/Event.vue";
import {getTodaysEvent} from '@/plugins/themes';

interface Event {
  eventName: string;
  text: string;
  timeStamp: string;
  colors: {
    primary: string;
    secondary: string;
    softBlack: string;
    accent: string;
  };
}

@Component({
  components: {
    Event: EventText,
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
  todaysEvent: Event | undefined = getTodaysEvent();
}
</script>
