<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$props extends HTMLAttributes<HTMLSpanElement> {
		element: 'span' | 'h1' | 'h2' | 'h3' | 'p' | 'div';
	}
	let { element, ...restProps } = $props<$$props>();
</script>

<div>
	<svelte:element this={element} {...restProps}>
		<slot>Text</slot>
	</svelte:element>
</div>

<style>
	div {
		font-size: var(--size);
		font-weight: var(--weight);
		background: -webkit-linear-gradient(var(--from), var(--to));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-family: var(--font);
	}
</style>
