<script lang="ts">
import type { Component, HTMLAttributes } from "vue";

export interface ButtonProps {
	type?: string;
	/** Controls the size of the button, influencing padding and font size. */
	size?: "s" | "m" | "l";
	/** If true, stretches the button to fill the width with its container. */
	stretched?: boolean;
	/** Defines the button's visual style, affecting its background and text color. */
	mode?: "filled" | "bezeled" | "plain" | "gray" | "outline" | "white";
	/** Displays a loading indicator in place of the button content when true. */
	loading?: boolean;
	/** Disables the button, preventing user interactions, when true. */
	disabled?: boolean;
	/** Specifies the root element type for the button, allowing for semantic customization or integration with routing libraries. */
	as?: string | Component;

	class?: HTMLAttributes["class"];
}
</script>

<script setup lang="ts">
import { useCssModule } from "vue";
import { usePlatform } from "@/shared";
import { Tappable } from "@/Tappable";
import { Spinner } from "@/Spinner";
import ButtonTypography from "./ButtonTypography.vue";

withDefaults(defineProps<ButtonProps>(), { type: "button", as: "button", size: "m", mode: "filled" });

const platform = usePlatform();
const style = useCssModule();

const modeStyles = {
	filled: style["wrapper--filled"],
	bezeled: style["wrapper--bezeled"],
	plain: style["wrapper--plain"],
	gray: style["wrapper--gray"],
	outline: style["wrapper--outline"],
	white: style["wrapper--white"],
};

const sizeStyles = {
	s: style["wrapper--s"],
	m: style["wrapper--m"],
	l: style["wrapper--l"],
};
</script>

<template>
	<Tappable
		:type
		:as
		:disabled="!!disabled ? 'disabled' : undefined"
		:class="[
			$style.wrapper,
			mode && modeStyles[mode],
			size && sizeStyles[size],
			platform === 'ios' && $style['wrapper--ios'],
			stretched && $style['wrapper--stretched'],
			loading && $style['wrapper--loading'],
			$props.class,
		]"
	>
		<Spinner v-if="loading" :class="$style.spinner" size="s" />

		<div v-if="$slots.before" :class="$style.before">
			<slot name="before" />
		</div>

		<ButtonTypography :class="$style.content" :size>
			<slot />
		</ButtonTypography>

		<div v-if="$slots.after" :class="$style.after">
			<slot name="after" />
		</div>
	</Tappable>
</template>

<style module>
.wrapper {
	display: inline-flex;
	align-items: center;
	justify-content: center;

	border: none;
	border-radius: 8px;
	text-decoration: none;
	box-sizing: border-box;

	max-inline-size: 100%;
	min-inline-size: 80px;
	overflow: hidden;
}

.wrapper::after {
	content: "";
	position: absolute;
	inset: 0;
	opacity: 0;
	transition: opacity 0.15s ease-out;
	background: var(--tgui--bg_color);
}

.wrapper--stretched {
	inline-size: 100%;
	flex-grow: 1;
}

.wrapper--s {
	height: 36px;
	min-width: 34px;
	gap: 6px;

	padding: 8px 12px;
	border-radius: 20px;
}

.wrapper--m {
	height: 42px;
	min-width: 42px;
	gap: 8px;
	padding: 8px 14px;
}

.wrapper--l {
	height: 50px;
	gap: 10px;
	padding: 10px 20px;
}

.wrapper--filled {
	--tgui--button--hovered-opacity: 0.15;
	--tgui--button--spinner-color: var(--tgui--button_text_color);
	color: var(--tgui--button_text_color);
	background: var(--tgui--button_color);
}

.wrapper--bezeled {
	--tgui--button--hovered-opacity: 0.07;
	--tgui--button--spinner-color: var(--tgui--link_color);
	color: var(--tgui--link_color);
	background: var(--tgui--secondary_fill);
}

.wrapper--plain {
	--tgui--button--hovered-opacity: 0.03;
	--tgui--button--spinner-color: var(--tgui--plain_foreground);
	color: var(--tgui--link_color);
	background: transparent;
}

.wrapper--gray {
	--tgui--button--hovered-opacity: 0.5;
	--tgui--button--spinner-color: var(--tgui--plain_foreground);
	color: var(--tgui--plain_foreground);
	background: var(--tgui--plain_background);
}

.wrapper--outline {
	--tgui--button--hovered-opacity: 0.5;
	--tgui--button--spinner-color: var(--tgui--plain_foreground);
	color: var(--tgui--plain_foreground);
	background: inherit;
	box-shadow: 0 0 0 1px var(--tgui--outline);
}

.wrapper--white {
	--tgui--button--hovered-opacity: 0.5;
	--tgui--button--spinner-color: var(--tgui--surface_dark);
	background: var(--tgui--white);
}

.wrapper--ios::after {
	content: unset;
}

.wrapper--ios.wrapper--m {
	border-radius: 12px;
}

.wrapper--loading .before,
.wrapper--loading .after,
.wrapper--loading .content {
	opacity: 0;
}

@media (hover: hover) and (pointer: fine) {
	.wrapper:hover::after {
		opacity: var(--tgui--button--hovered-opacity);
	}
}

.before,
.after {
	display: flex;
	align-items: center;
	justify-content: center;
}

.content {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	z-index: var(--tgui--z-index--simple);
}

.spinner {
	position: absolute;
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: auto;
	background: inherit;
	border-radius: inherit;
	color: var(--tgui--button--spinner-color);
}
</style>
