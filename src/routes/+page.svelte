<script lang="ts">
	import Dialog from '$lib/components/Dialog/dialog.svelte';
	import Tooltip from '$lib/components/Tooltip/tooltip.svelte';
	import typewriter from '$lib/utils/Typewriter.js';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	let show = $state<boolean>(false);
	onMount(() => (show = true));
</script>

{#if show}
	<div transition:typewriter={{ speed: 1 }}>Hello World!</div>
{/if}
