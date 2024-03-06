<script lang="ts">
	import Subheader from './Subheader.svelte';
	import Header from './Header.svelte';

	export let title: string;
	export let icon: string;
	export let items: { header?: string, text: string }  [] = [];
</script>

<div class="p-3">
	<Header> {title} </Header>
	<div class="py-3">
		{#each items as item}
			<div class="py-2">
			<Subheader>
				{icon} {@html item.header || ''}
			</Subheader>	
			<div class="py-1">
				{@html item.text.split('\n').join('<br/>')}
			</div>
			</div>
		{/each}
</div>
</div>