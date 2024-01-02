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
		label?: Snippet<unknown>;
	}
	type Slots = {
		default: unknown;
		label?: Snippet<unknown>;
		cell: Snippet<{ row: T; column: TableColumn<T> }>;
		cols: Snippet<TableColumn<T>>;
	};
	let { rows, columns, cell, cols, children, label, ...restProps } =
		$props<PropsWithChildren<$$props, Slots>>();
</script>

{#if label}
	{@render label(null)}
{/if}
<table {...restProps}>
	<slot name="thead" {columns}>
		<thead>
			<tr>
				{#each columns as col}
					{@render cols(col)}
				{/each}
			</tr>
		</thead>
	</slot>

	<slot>
		<tbody>
			{#each rows as row}
				<tr>
					{#each columns as col}
						{@render cell({ row, column: col })}
					{/each}
				</tr>
			{/each}
		</tbody>
	</slot>

	<slot name="tfoot" />
</table>
