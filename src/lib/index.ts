// Reexport your entry components here
import FormBody from '$lib/components/Form/form-body.svelte';
import FormControl from '$lib/components/Form/form-control.svelte';
import Dialog from './components/Dialog/dialog.svelte';
import Tooltip from './components/Tooltip/tooltip.svelte';
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
import AsyncModal from './components/Wrappers/async-modal.svelte';
import ModalList from './components/Wrappers/modal-list.svelte';
import typewriter from './utils/Typewriter.js';
const Form = {
	Body: FormBody,
	Control: FormControl,
	Input: FormInput,
	Select: FormSelect,
	Textarea: FormTextarea
};
const Modal = {
	Wrapper: AsyncModal,
	List: ModalList
};

export { typewriter, Tooltip, Dialog };
export { Modal };
export { GradientText, floatEffect as FloatEffect };
export { useFloatingEffect };
export { Table };
export { ConfirmationButton };
export { SVGBounce };
export type { TableColumn };
export default Form;
