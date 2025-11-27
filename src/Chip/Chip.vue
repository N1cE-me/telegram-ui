<script lang="ts">
import type { Component, HTMLAttributes } from "vue";
import { Subheadline } from "@/Subheadline";

export interface ChipProps {
	/** Defines the visual style of the chip, affecting its background, border, and shadow. */
	mode?: "elevated" | "mono" | "outline";

	/** Specifies the HTML tag or React component used to render the Chip, defaulting to `div`. */
	as?: string | Component;

	class?: HTMLAttributes["class"];
}

interface ChipSlots {
	/** Content or component to be placed before the main text, typically an icon or avatar. */
	before?: unknown;
	/** Content or component to be placed after the main text, such as an icon indicating an action. */
	after?: unknown;
	/** The main text content of the chip. */
	default?: unknown;
}
</script>

<script setup lang="ts">
import { useCssModule } from "vue";
import { usePlatform } from "@/shared";
import { Tappable } from "@/Tappable";

const props = withDefaults(defineProps<ChipProps>(), { mode: "elevated", as: "div" });
const slots = defineSlots<ChipSlots>();

const platform = usePlatform();
const styles = useCssModule();

const modeStyles = {
	elevated: styles["wrapper--elevated"],
	mono: styles["wrapper--mono"],
	outline: styles["wrapper--outline"],
};
</script>

<template>
	<Tappable :as :class="[$style.wrapper, modeStyles[mode], props.class]">
		<div v-if="slots.before" :class="$style.before">
			<slot name="before" />
		</div>

		<Subheadline :class="$style.text" :level="platform === 'ios' ? '2' : '1'" weight="2">
			<slot />
		</Subheadline>

		<div v-if="slots.after" :class="$style.after">
			<slot name="after" />
		</div>
	</Tappable>
</template>

<style lang="css" module>
.wrapper {
	user-select: none;

	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	box-sizing: border-box;

	padding: 8px 12px;
	border-radius: 10px;
}

.wrapper--elevated {
	background: var(--tgui--surface_primary);
	box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.05);
}

.wrapper--mono {
	background: var(--tgui--plain_background);
}

.wrapper--outline {
	border-radius: 10px;
	box-shadow: 0 0 0 1px var(--tgui--outline);
}

.text {
	overflow: hidden;
	text-overflow: ellipsis;

	flex: 1 1 0;
	color: var(--tgui--plain_foreground);
}

.before {
	margin-right: 2px;
}

.after {
	display: flex;
	align-items: center;

	/* Visually centering icons, because of line-height */
	margin-top: 1.5px;
	color: var(--tgui--secondary_hint_color);
}
</style>
