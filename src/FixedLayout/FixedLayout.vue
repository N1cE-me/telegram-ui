<script lang="ts">
import type { Component, HTMLAttributes } from "vue";

export interface FixedLayoutProps {
	/** The component type to render, allowing for semantic HTML use. Defaults to 'div'. */
	as?: string | Component;
	/** Determines the vertical positioning of the layout within its container. Options are 'top' or 'bottom'. */
	vertical?: "top" | "bottom";
	class?: HTMLAttributes["class"];
}
</script>

<script setup lang="ts">
import { useCssModule } from "vue";
import { reactiveOmit } from "@vueuse/core";

const props = withDefaults(defineProps<FixedLayoutProps>(), { as: "div", vertical: "bottom" });
const forwardedProps = reactiveOmit(props, "class", "as");

const styles = useCssModule();

const verticalStyles = {
	top: styles["wrapper--top"],
	bottom: styles["wrapper--bottom"],
};
</script>

<template>
	<component
		v-bind="forwardedProps"
		:is="as"
		:class="[$style.wrapper, vertical && verticalStyles[vertical], props.class]"
	>
		<slot />
	</component>
</template>

<style lang="css" module>
.wrapper {
	position: fixed;
	left: 0;
	right: 0;
}

.wrapper--top {
	top: 0;
}

.wrapper--bottom {
	padding-bottom: var(--tgui--safe_area_inset_bottom);
	bottom: 0;
}
</style>
