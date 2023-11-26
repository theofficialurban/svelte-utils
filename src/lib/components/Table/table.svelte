<script lang="ts">
	import type { HTMLTableAttributes } from 'svelte/elements';

	import type { PropsWithChildren, Snippet } from 'svelte';
	import type TableColumn from '$lib/types/Table.js';
	type T = $$Generic<Record<string, unknown>>;
	interface $$props extends HTMLTableAttributes {
		rows: T[];
		columns: TableColumn<T>[];
		cell: Snippet<{ row: T; column: TableColumn<T> }>;
		cols: Snippet<TableColumn<T>>;
		tableTitle?: Snippet<void>;
	}
	type Slots = {
		default: unknown;
		tableTitle?: string;
		cell: Snippet<{ row: T; column: TableColumn<T> }>;
		cols: Snippet<TableColumn<T>>;
	};
	let { rows, columns, cell, cols, children, tableTitle, ...restProps } =
		$props<PropsWithChildren<$$props, Slots>>();
</script>

{#if tableTitle}
	{@render tableTitle()}
{/if}
<table {...restProps}>
	<thead>
		<tr>
			{#each columns as col}
				{@render cols(col)}
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each rows as row}
			<tr>
				{#each columns as col}
					{@render cell({ row, column: col })}
				{/each}
			</tr>
		{/each}
	</tbody>

	{#if children}
		{@render children()}
	{/if}
</table>
