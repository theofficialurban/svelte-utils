// Reexport your entry components here
import FormBody from '$lib/components/Form/form-body.svelte';
import FormControl from '$lib/components/Form/form-control.svelte';

import FormInput from './components/Form/form-input.svelte';
import FormSelect from './components/Form/form-select.svelte';
import FormTextarea from './components/Form/form-textarea.svelte';
import GradientText from './components/GradientText/gradient-text.svelte';
import Table from './components/Table/table.svelte';
import ConfirmationButton from './components/ConfirmationButton/confirmation-button.svelte';
import SVGBounce from './components/SVG/svg-parent.svelte';
import type TableColumn from './types/Table.js';
import useFloatingEffect from './utils/FloatEffect.js';
import AsyncModal from './components/Wrappers/async-modal.svelte';
import ModalList from './components/Wrappers/modal-list.svelte';
import typewriter from './utils/Typewriter.js';
import type { Tweened, TweenedOptions } from 'svelte/motion';
import type { Action } from 'svelte/action';
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
export type ClickEvent = MouseEvent & { currentTarget: EventTarget & HTMLButtonElement };
export type OnConfirm = (itemId: string, e: ClickEvent) => Promise<void> | void;
export type OnDecline = (itemId: string, e: ClickEvent) => Promise<void> | void;
export type FloatEffect<T extends Element = Element> = (
	options: TweenedOptions<number>,
	floatDistance: number
) => FloatEffectReturn<T>;
export type FloatEffectReturn<T extends Element = Element> = {
	effect: Action<T, number>;
	store: Tweened<number>;
};
export { typewriter };
export { Modal };
export { GradientText };
export { useFloatingEffect };
export { Table };
export { ConfirmationButton };
export { SVGBounce };
export type { TableColumn };
export default Form;
