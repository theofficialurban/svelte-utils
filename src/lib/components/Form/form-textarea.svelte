<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$props extends HTMLAttributes<HTMLTextAreaElement> {
		value?: any;
		toggleHTML?: boolean;
	}
	let { value, toggleHTML = false, ...restProps } = $props<$$props>();
</script>

{#if toggleHTML}
	<div>
		{@html value}
	</div>
{:else}
	<textarea bind:value {...restProps} />
{/if}
