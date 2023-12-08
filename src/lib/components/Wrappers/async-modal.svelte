<script lang="ts">
	type T = Record<string, unknown> | Array<unknown>;
	interface $$props {
		promise: Promise<T>;
	}
	let { promise } = $props<$$props>();
</script>

{#await promise}
	<slot name="loading" />
{:then value}
	<slot {value} />
{:catch error}
	<slot name="error" {error}>
		{error}
	</slot>
{/await}
