<script lang="ts">
	import type { ActionResult, SubmitFunction } from '@sveltejs/kit';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import FormAlert from './form-alert.svelte';
	import { enhance } from '$app/forms';

	interface $$props extends HTMLFormAttributes {
		form?: ActionResult | null;
		submitFn?: SubmitFunction | undefined;
	}

	let {
		form = null,

		submitFn = undefined,

		...restProps
	} = $props<$$props>();
</script>

<div>
	<slot name="title">
		<h1>My Form</h1>
	</slot>
	{#if form && form.type}
		<FormAlert action={form} />
	{/if}
	<form {...restProps} use:enhance={submitFn}>
		<slot />
		<slot name="submit">
			<div class="py-2"><button type="submit" class="btn btn-success">Submit</button></div>
		</slot>
	</form>
</div>
