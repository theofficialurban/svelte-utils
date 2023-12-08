<script lang="ts">
	import SvgFloating from '$lib/components/SVG/svg-floating.svelte';
	import SvgParent from '$lib/components/SVG/svg-parent.svelte';
	import { Modal } from '$lib/index.js';
	let modal = [{ name: 'Josh' }, { name: 'Sorber' }];
	const promise = new Promise<Array<{ name: string }>>((res) => {
		setTimeout(() => res(modal), 5000);
	});
</script>

<Modal.Wrapper {promise} let:value>
	<span slot="loading">Loading....</span>
	<Modal.List modal={value as ({name: string}[])}>
		{#snippet children(item: {name: string})}
			<li>{item.name}</li>
		{/snippet}
	</Modal.List>
</Modal.Wrapper>
