import { spring, type SpringOpts } from 'svelte/motion';

export default function floatEffect<E extends HTMLElement = HTMLElement>(
	opts: SpringOpts,
	translateY: number = 10
) {
	const spr = spring(0, { ...opts });
	const float = (node: E, spr: number) => {
		//node.setAttribute('style', `transform: translateY(-${spr}px)`);
		return {
			update(spr: number) {
				node.setAttribute('style', `transform: translateY(-${spr}px)`);
			}
		};
	};
	return {
		spr,
		float,
		events: {
			onpointerenter: () => spr.set(translateY),
			onpointerleave: () => spr.set(0)
		}
	};
}
