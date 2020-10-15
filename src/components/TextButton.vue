<template>
	<v-btn
			text
			color="chocolate"
			:href="url"
		>
			<v-icon
				class="mr-1"
				color="chocolate"
			>
				{{ icon }}
			</v-icon>
			{{ btnText }}
		</v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TextButton extends Vue{
	@Prop()
  readonly icon!: string;
	readonly btnText!: string;
	readonly url!: string;
}
</script>