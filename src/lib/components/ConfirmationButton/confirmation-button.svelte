<script lang="ts">
	import type { ClickEvent, OnConfirm, OnDecline } from '$lib/index.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$props extends HTMLAttributes<HTMLButtonElement> {
		onconfirm?: OnConfirm;
		ondecline?: OnDecline;
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
	onclick={(e: ClickEvent) => {
		if (confirm(text)) {
			onconfirm(e.currentTarget.id, e);
		} else {
			ondecline(e.currentTarget.id, e);
		}
	}}
>
	<slot />
</button>
