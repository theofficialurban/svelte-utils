# Internal Svelte Utility Functions

# Documentation

## Form

Form.Body -> Form.Control -> Form.(Input/Textarea/Select)

### Form.Body

The body of the form, the same as `<form>`

### Form.Control

Wrapper for a form control

### Form.Input

### Form.Textarea

### Form.Select

## Example

```html
<script lang="ts">
	import Form from '@theofficialurban/svelte-utils';
</script>
<Form.Body method="POST">
	<Form.Control>
		<Form.Input name="input" type="text" />
	</Form.Control>
</Form.Body>
```

## Gradient Text

### CSS Variables

`--from` From Gradient Color
`--to` To Gradient Color
`--size` Font Size
`--weight` Font Weight
`--font` Font Family

```html
<script lang="ts">
	import { GradientText } from '@theofficialurban/svelte-utils';
</script>
<GradientText element="span" --from="" --to="">Text</GradientText>
```

## Table

### Snippets

- `cell`
  - `{column, row}`
- `cols`
  - `{key, title}`
- `tableTitle`

```html
<script lang="ts">
	import { Table } from '@theofficialurban/svelte-utils';
</script>
<table rows="{}" columns="{}">
	{#snippet cell({row, column})} .... {/snippet} {#snippet column(col)} .... {/snippet} {#snippet
	title()} .... {/snippet}
</table>
```
