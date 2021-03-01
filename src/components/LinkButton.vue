<template>
  <v-btn
    fab
    dark
    :color="link.color"
    :href="link.url"
    small
  >
    <v-icon-icomoon :icon="link.icon"/>
  </v-btn>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import VIconIcomoon from "@/components/VIconIcomoon.vue";

interface Link {
  icon: string;
  color: string;
  url: string;
}

@Component({
  components: {VIconIcomoon}
})
export default class LinkButton extends Vue {
  @Prop()
  readonly link!: Link;
}
</script>

<style scoped>
.btn-text {
  font-size: 1.4em;
}

</style>