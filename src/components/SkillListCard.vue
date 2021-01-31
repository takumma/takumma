<template>
	<v-hover v-slot:default="{ hover }">
		<v-card
			tile
			height="120"
			width="120"
			:elevation="hover ? 8 : 2"
		>
			<v-card-text class="text-no-wrap secondary--text title-text my-0 font-weight-bold">
				{{ skill.name }}
			</v-card-text>
			<v-layout class="justify-center">
				<v-icon
					size="48"
					:color="hover ? skill.color : 'softBlack'"
				>
					{{ skill.icon }}
				</v-icon>	
			</v-layout>
		</v-card>
	</v-hover>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

@Component
export default class SkillListCard extends Vue{
	@Prop()
	readonly skill!: Skill;
}
</script>

<style scoped>
.title-text {
 font-size: 1.0em;
}
</style>