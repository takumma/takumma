<template>
  <div class="timeline">
    <v-timeline>
      <v-timeline-item
        v-for="(activity, i) in activities"
        :key="i"
        color="chocolate"
        small
      >
        <template v-slot:opposite>
          <span
            class="chocolate--text"
            v-text="activity.timeStamp"
          ></span>
        </template>
        <div class="py-4">
          <h3 class="font-weight-light mb-4">
            {{ activity.title }}
          </h3>
          <div>
            {{ activity.memo }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      activities: [
        {
          title: "パソコン甲子園2019モバイル部門本戦出場",
          subtitle: "会津大学主催のAndroidアプリケーションコンテスト",
          timeStamp: "2019-11-12",
          memo: "友達2人と3人チームでAndroidアプリ\"TABINOW\"を開発した。"
        },
        {
          title: "CCCu22参加",
          subtitle: "Code for Japan主催のHackathon",
          timeStamp: "2020-9",
          memo: "ここで知り合った大学生3人と組んで4人で\"kinku.me\"を開発した。"
        },
        {
          title: "SECCON2020参加",
          subtitle: "Online CTF",
          timeStamp: "2019-10-10,11",
          memo: "CTF初参加。全く解けなかった（でも楽しかった）。"
        }
    ],
    };
  }
})
</script>