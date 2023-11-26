<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface $$props extends HTMLInputAttributes {}
	let { value, ...restProps } = $props<$$props>();
</script>

<input bind:value {...restProps} />
