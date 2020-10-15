<template>
	<v-btn-toggle class="ml-auto mr-2">
		<text-button
			class="mr-4"
			v-for="link in links"
			:key="link.name"
			:btnText="link.name"
			:icon="link.icon"
			:url="link.url"
		/>
	</v-btn-toggle>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TextButton from '../components/TextButton.vue'

@Component({
	components: {
		TextButton,
	}
})
export default class TextButtonToggle extends Vue{
	@Prop()
	readonly links: any;	
}
</script>