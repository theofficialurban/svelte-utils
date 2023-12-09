/**
 * @param {HTMLElement} node
 * @param {{ speed?: number }} params
 */
export default function typewriter<T extends HTMLElement = HTMLElement>(
	node: T,
	{ speed = 1 }: { speed: number }
) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent;
	const duration = text ? text.length / (speed * 0.01) : 0;

	return {
		duration,
		tick: (t: number) => {
			if (!text) return;
			const i = ~~(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}
