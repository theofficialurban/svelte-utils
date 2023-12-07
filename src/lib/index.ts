// Reexport your entry components here
import FormBody from '$lib/components/Form/form-body.svelte';
import FormControl from '$lib/components/Form/form-control.svelte';
import FormInput from './components/Form/form-input.svelte';
import FormSelect from './components/Form/form-select.svelte';
import FormTextarea from './components/Form/form-textarea.svelte';
import GradientText from './components/GradientText/gradient-text.svelte';
import floatEffect from './utils/Float.js';
import Table from './components/Table/table.svelte';
import ConfirmationButton from './components/ConfirmationButton/confirmation-button.svelte';
import SVGBounce from './components/SVG/svg-parent.svelte';
import type TableColumn from './types/Table.js';
import useFloatingEffect from './utils/FloatEffect.js';
const Form = {
	Body: FormBody,
	Control: FormControl,
	Input: FormInput,
	Select: FormSelect,
	Textarea: FormTextarea
};
export { GradientText, floatEffect as FloatEffect };
export { useFloatingEffect };
export { Table };
export { ConfirmationButton };
export { SVGBounce };
export type { TableColumn };
export default Form;
