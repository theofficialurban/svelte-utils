<script lang="ts">
	import {
		Table,
		type TableColumn,
		FloatEffect,
		GradientText
	} from '@theofficialurban/svelte-utils';
	const rows = [{ a: 1, b: 2 }];
	const columns: TableColumn<{ a: number; b: number }>[] = [{ title: 'A', key: 'a' }];
	const { float, spr, events } = FloatEffect({ stiffness: 0.3 }, 10);
</script>

<GradientText element="h1" --size="40px" --font="Arial" --from="salmon" --to="seagreen"
	>Hello</GradientText
>
<div use:float={$spr} {...events}>
	<Table bgcolor="salmon" border={1} {rows} {columns}>
		{#snippet cell({ row, column })}
			<td>{row[column.key]}</td>
		{/snippet}
		{#snippet cols(column)}
			<th>{column.title}</th>
		{/snippet}
	</Table>
</div>
