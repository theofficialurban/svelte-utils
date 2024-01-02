<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$props extends HTMLAttributes<HTMLTextAreaElement> {
		value?: any;
		toggleHTML?: boolean;
	}
	let { value, toggleHTML = false, ...restProps } = $props<$$props>();
</script>

{#if toggleHTML}
	<slot name="preview">
		{@html value}
	</slot>
{:else}
	<slot><textarea bind:value {...restProps} /></slot>
{/if}
