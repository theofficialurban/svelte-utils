<script lang="ts">
	import { createDialog } from '@melt-ui/svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	const {
		elements: { portalled, overlay, title, content, close, trigger },
		states: { open }
	} = createDialog();
	interface $$props extends HTMLAttributes<HTMLDialogElement> {
		classes?: {
			content?: string;
			title?: string;
			overlay?: string;
			portalled?: string;
			trigger?: string;
			close?: string;
		};
	}
	let { classes, ...restProps } = $props<$$props>();
</script>

<button use:trigger {...$trigger} class={classes?.trigger ?? ''}>
	<slot name="trigger">Click</slot>
</button>

<div use:portalled {...$portalled} class={classes?.portalled ?? ''}>
	{#if $open}
		<div use:overlay {...$overlay} class={classes?.overlay ?? ''} />
		<dialog open={$open} use:content {...$content} {...restProps} class={classes?.content ?? ''}>
			<slot name="title" {title}>
				<span use:title {...$title} class={classes?.title ?? ''}>Title</span>
			</slot>
			<slot>
				<div>content</div>
			</slot>
			<button class={classes?.close ?? ''} use:close {...$close}>Close</button>
		</dialog>
	{/if}
</div>
