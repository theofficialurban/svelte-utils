<script lang="ts">
	import { createTooltip } from '@melt-ui/svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { writable } from 'svelte/store';
	const open = writable(false);
	interface $$props extends HTMLAttributes<HTMLDivElement> {
		classes?: {
			trigger?: string;
			content?: string;
		};
	}
	let { classes, ...restProps } = $props<$$props>();
	const {
		elements: { trigger, content, arrow }
	} = createTooltip({
		open,
		onOpenChange: (e) => {
			open.set(e.next);
			return e.next;
		},
		forceVisible: true,
		positioning: {
			placement: 'top'
		}
	});
</script>

<button class={classes?.trigger ?? ''} type="button" {...$trigger} use:trigger aria-label="Add"
	><slot name="trigger">Popover</slot></button
>
{#if $open}
	<div use:content {...$content} class={classes?.content ?? ''} {...restProps}>
		<slot>My Popover</slot>
	</div>
{/if}
