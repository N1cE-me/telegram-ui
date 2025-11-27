import type { Wave } from "./Ripple.vue";
import { ref } from "vue";
import { useTimeoutFn } from "@vueuse/core";

const RIPPLE_DELAY = 70;
const WAVE_LIVE = 225;

export const useRipple = () => {
	const clicks = ref<Wave[]>([]);

	const pointerDelayTimers = new Map<number, ReturnType<typeof setTimeout>>();

	const { start } = useTimeoutFn(() => (clicks.value = []), WAVE_LIVE);

	function addClick(x: number, y: number, pointerId: number) {
		const dateNow = Date.now();
		const filteredClicks = clicks.value.filter((click) => click.date + WAVE_LIVE > dateNow);

		clicks.value = [...filteredClicks, { x, y, date: dateNow, pointerId }];

		start();
		pointerDelayTimers.delete(pointerId);
	}

	const onPointerDown = (e: PointerEvent) => {
		const { top, left } = (e.currentTarget as HTMLElement).getBoundingClientRect();
		const x = e.clientX - (left ?? 0);
		const y = e.clientY - (top ?? 0);

		pointerDelayTimers.set(
			e.pointerId,
			setTimeout(() => addClick(x, y, e.pointerId), RIPPLE_DELAY)
		);
	};

	const onPointerCancel = (e: PointerEvent) => {
		const timer = pointerDelayTimers.get(e.pointerId);
		clearTimeout(timer);
		pointerDelayTimers.delete(e.pointerId);
	};

	return {
		clicks,
		onPointerDown,
		onPointerCancel,
	};
};
