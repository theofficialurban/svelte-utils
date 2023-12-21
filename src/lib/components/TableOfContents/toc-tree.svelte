<script lang="ts">
	import type { TableOfContentsItem } from '@melt-ui/svelte';
	import { createTableOfContents } from '@melt-ui/svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	type TableOfContents = ReturnType<typeof createTableOfContents>;
	interface $$props extends HTMLAttributes<HTMLUListElement> {
		tree: TableOfContentsItem[];
		activeIds: number[];
		item: TableOfContents['elements']['item'];
		level: number;
		display?: Snippet<string> | null;
	}
	let { tree, activeIds, item, level, display = null, ...restProps } = $props<$$props>();
</script>

<ul {...restProps}>
	{#if tree && tree.length}
		{#each tree as heading, i (i)}
			<li>
				<a use:item {...$item(heading.id)} href={`#${heading.id}`}>
					{#if display}
						{@render display(heading.title)}
					{:else}
						{heading.title}
					{/if}
				</a>
				{#if heading.children && heading.children.length}
					<svelte:self {activeIds} tree={heading.children} level={level + 1} {item} />
				{/if}
			</li>
		{/each}
	{/if}
</ul>
