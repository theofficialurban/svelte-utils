<script lang="ts">
	import type { PropsWithChildren, Snippet } from 'svelte';
	type T = $$Generic<Record<string, unknown>>;
	interface $$props {
		modal: T[];
		children: Snippet<T>;
	}
	let { children, modal } = $props<PropsWithChildren<$$props, {}>>();
</script>

{#each modal as item}
	{@render children(item)}
{/each}
