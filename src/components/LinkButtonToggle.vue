<template>
  <div>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        xs="4" sm="2" md="2" lg="1"
        :cols="links.length"
        v-for="link in links"
        :key="link.name"
      >
        <link-button :link="link"/>
      </v-col>
    </v-row>
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
  readonly links!: Link[];
}
</script>