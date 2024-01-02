<script lang="ts">
	import Form, { GradientText, useFloatingEffect } from '$lib/index.js';
	import type { ActionResult } from '@sveltejs/kit';
	import type { FloatEffectReturn } from '$lib/index.js';
	const { effect, store }: FloatEffectReturn<HTMLDivElement> = useFloatingEffect(
		{ duration: 1000 },
		-10
	);
	interface $$props {
		form: ActionResult;
	}
	let { form } = $props<$$props>();
	$inspect(form);
</script>

<div use:effect={$store}>
	<GradientText element="span" --size="40px" --from="blue" --to="red">Hello World</GradientText>
</div>
<Form.Body method="POST" action="/" {form}>
	<Form.Control>
		<Form.Input name="name" id="id" placeholder="My Text" />
	</Form.Control>
</Form.Body>

<style>
	:root {
		background-color: slategray;
	}
</style>
