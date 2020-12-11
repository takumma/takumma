<template>
  <div
    v-for="link in links"
    :key="link.icon"
  >
    <link-button :link="link"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import LinkButton from "@/components/LinkButton.vue";

interface Link {
  icon: string;
  color: string;
  url: string;
}

@Component({
  components: {LinkButton}
})
export default class Links extends Vue {
  @Prop()
  readonly links: Link[] = [];
}
</script>