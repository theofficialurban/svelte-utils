<script lang="ts">
	interface $$props {
		modal: Record<string, unknown>[];
	}
	let { modal } = $props<$$props>();
</script>

{#each modal as item}
	<slot {item} />
{/each}
