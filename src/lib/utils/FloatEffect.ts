import { tweened, type TweenedOptions } from 'svelte/motion';

const useFloatingEffect = <T extends Element = Element>(
	opts: TweenedOptions<number> = {
		duration: 1000
	},
	floatDist: number = 10
) => {
	const store = tweened(0, opts);
	const actionFn = (node: T, bounceVal: number) => {
		node.setAttribute('style', `transform: translateY(${bounceVal}px)`);
		store.set(floatDist);
		return {
			update(bounceVal: number) {
				if (bounceVal == floatDist) store.set(0);
				if (bounceVal == 0) store.set(floatDist);
				node.setAttribute('style', `transform: translateY(${bounceVal}px)`);
			}
		};
	};
	return {
		effect: actionFn,
		store
	};
};
export default useFloatingEffect;
