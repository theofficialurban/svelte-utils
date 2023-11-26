<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$props extends HTMLAttributes<HTMLDivElement> {}

	let { ...restProps } = $props<$$props>();
</script>

<div class="form-control" {...restProps}>
	<slot name="label">
		<span class="label">No Label</span>
	</slot>

	<slot>No Inputs Added Yet</slot>
</div>
