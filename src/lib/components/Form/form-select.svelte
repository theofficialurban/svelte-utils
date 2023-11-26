<script lang="ts">
	import type { HTMLSelectAttributes } from 'svelte/elements';
	type T = $$Generic<Record<string, unknown>>;
	interface $$props extends HTMLSelectAttributes {
		options: T[];
		displayKey: keyof T;
		valueKey: keyof T;
	}

	let { options, displayKey, valueKey, ...restProps } = $props<$$props>();
</script>

<select class="select select-bordered" {...restProps}>
	{#each options as option}
		<option value={option[valueKey]}>{option[displayKey]}</option>
	{/each}
</select>
