<template>
	<v-btn
			text
			color="secondary"
			:href="link.url"
		>
			<v-icon
				class="mr-1"
				color="secondary"
			>
				{{ link.icon }}
			</v-icon>
			{{ link.name }}
		</v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Link {
	name: string;
	icon: string;
	url: string;
}

@Component
export default class TextButton extends Vue{
	@Prop()
  readonly link!: Link;
}
</script>