<template>
	<v-hover v-slot:default="{ hover }">
		<v-card
			tile
			height="150"
			width="150"
			:elevation="hover ? 8 : 2"
		>
			<v-card-title class="justify-center text-no-wrap chocolate--text">
				{{ skill.name }}
			</v-card-title>
			<v-layout class="justify-center">
				<v-icon
					size="64"
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