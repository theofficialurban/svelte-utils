<script lang="ts">
	import {} from '@melt-ui/svelte';
	import { createTableOfContents } from '@melt-ui/svelte';
	import type { CreateTableOfContentsArgs } from '@melt-ui/svelte';
	import TocTree from './toc-tree.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	interface $$props extends HTMLAttributes<HTMLUListElement> {
		options: CreateTableOfContentsArgs;
		display?: Snippet<string> | null;
	}
	let { options, display = null, ...restProps } = $props<$$props>();
	const {
		elements: { item },
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents(options);
</script>

<TocTree
	tree={$headingsTree}
	activeIds={$activeHeadingIdxs}
	{item}
	level={1}
	{...restProps}
	{display}
/>
<slot tree={$headingsTree} activeHeadingIds={$activeHeadingIdxs} />
