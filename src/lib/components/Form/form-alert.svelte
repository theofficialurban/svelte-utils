<script lang="ts">
	import type { ActionResult } from '@sveltejs/kit';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$props extends HTMLAttributes<HTMLDivElement> {
		action: ActionResult;
	}
	let { action, ...restProps } = $props<$$props>();
</script>

{#if action.type === 'success'}
	<slot name="success">
		<div {...restProps}>Success!</div>
	</slot>
{:else if action.type === 'failure' || action.type === 'error'}
	<slot name="error">
		{#if action.type === 'error' && action.error}
			<div {...restProps}>
				Code: {action.error.code}<br />
				Type: {action.error.type}
			</div>
		{/if}
	</slot>
{:else}
	<slot>
		<div {...restProps}>??</div>
	</slot>
{/if}
