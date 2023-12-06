<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	type ClickEvent = MouseEvent & { currentTarget: EventTarget & HTMLButtonElement };
	interface $$props extends HTMLAttributes<HTMLButtonElement> {
		onconfirm?: (itemId: string, e: ClickEvent) => Promise<void> | void;
		ondecline?: (itemId: string, e: ClickEvent) => Promise<void> | void;
		text: string;
	}
	let {
		onconfirm = () => {
			return;
		},
		ondecline = () => {
			return;
		},
		text,
		...restProps
	} = $props<$$props>();
</script>

<button
	{...restProps}
	onclick={(e) => {
		if (confirm(text)) {
			onconfirm(e.currentTarget.id, e);
		} else {
			ondecline(e.currentTarget.id, e);
		}
	}}
>
	<slot />
</button>
