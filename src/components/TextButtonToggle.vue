<template>
	<v-btn-toggle class="ml-auto mr-2">
		<text-button
			class="mr-4"
			v-for="link in links"
			:key="link.name"
			:link="link"
		/>
	</v-btn-toggle>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TextButton from '../components/TextButton.vue'

interface Link {
	name: string;
	icon: string;
	url: string;
}

@Component({
	components: {
		TextButton,
	}
})
export default class TextButtonToggle extends Vue{
	@Prop()
	readonly links!: Array<Link>;	
}
</script>