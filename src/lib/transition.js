import { crossfade } from 'svelte/transition';
import { elasticInOut, elasticOut } from 'svelte/easing';

export const [send, receive] = crossfade({
	duration: (d) => Math.sqrt(d * 2000),
	easing: elasticOut
});
