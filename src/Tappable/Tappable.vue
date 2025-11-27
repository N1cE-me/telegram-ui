<script lang="ts">
import type { Component, HTMLAttributes } from "vue";

export interface TappableProps {
	as?: string | Component;
	interactiveAnimation?: "opacity" | "background";
	readOnly?: boolean;
	class?: HTMLAttributes["class"];
}
</script>

<script setup lang="ts">
import { computed } from "vue";
import { usePlatform } from "@/shared";
import { useRipple } from "./utils";
import Ripple from "./Ripple.vue";

const props = withDefaults(defineProps<TappableProps>(), { as: "div", interactiveAnimation: "background" });

const platform = usePlatform();
const { clicks, onPointerCancel, onPointerDown } = useRipple();

const hasRippleEffect = computed(
	() => platform.value === "base" && props.interactiveAnimation === "background" && !props.readOnly
);
</script>

<template>
	<component
		v-bind="$attrs"
		:is="as"
		:class="[
			$style.wrapper,
			platform === 'ios' && $style['wrapper--ios'],
			interactiveAnimation === 'opacity' && $style['wrapper--opacity'],
			props.class,
		]"
		@pointerdown="onPointerDown"
		@pointercancel="onPointerCancel"
	>
		<Ripple v-if="hasRippleEffect" :clicks />
		<slot />
	</component>
</template>

<style module>
.wrapper {
	position: relative;
	isolation: isolate;
	cursor: pointer;
	transition: opacity 0.15s ease-out;
}

.wrapper[readonly] {
	cursor: default;
	pointer-events: visible;
}

.wrapper[disabled] {
	cursor: default;
	opacity: 0.35;
}

.wrapper--opacity:active,
.wrapper--ios:active {
	opacity: 0.65;
}

@media (hover: hover) and (pointer: fine) {
	.wrapper--opacity:hover,
	.wrapper--ios:hover {
		opacity: 0.85;
	}
}
</style>
