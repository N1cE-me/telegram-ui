<script lang="ts">
import type { Component, HTMLAttributes } from "vue";
import type { TappableProps } from "@/Tappable";

export interface CellProps extends Omit<TappableProps, "as"> {
	/** Custom component or HTML tag to be used as the root element of the cell, div by default */
	as?: string | Component;
	/** Controls the hover state of the component externally, useful for keyboard navigation */
	hovered?: boolean;
	/** Allows for multiline content without truncation */
	multiline?: boolean;
	class?: HTMLAttributes["class"];
}

export interface CellSlots {
	/** Main content displayed as a header */
	default?: unknown;
	/** Content displayed above the main content as a subheading */
	subhead?: unknown;
	/** Content displayed below the header as a subtitle */
	subtitle?: unknown;
	/** Additional description displayed below the subtitle */
	description?: unknown;
	/** Content or elements to be displayed on the left side of the cell */
	before?: unknown;
	/** Content or elements to be displayed on the right side of the cell */
	after?: unknown;
	/** Content displayed alongside the header as a hint */
	hint?: unknown;
	/** A badge component to be displayed next to the header */
	badge?: unknown;
}
</script>

<script setup lang="ts">
import { computed } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { usePlatform } from "@/shared";
import { Tappable } from "@/Tappable";
import { Subheadline, type SubheadlineProps } from "@/Subheadline";
import { Text } from "@/Text";
import { Caption } from "@/Caption";

const props = withDefaults(defineProps<CellProps>(), { as: "div" });
const forwardedProps = reactiveOmit(props, "class", "as", "hovered", "multiline");
defineSlots<CellSlots>();

const platform = usePlatform();

const isIOS = computed(() => platform.value === "ios");

const titleComponent = computed(() => (isIOS.value ? Text : Subheadline));
const titleProps = computed<SubheadlineProps>(() => (isIOS.value ? {} : { level: "1" }));

const descriptionComponent = computed(() => (isIOS.value ? Caption : Subheadline));
const descriptionProps = computed<SubheadlineProps>(() => (isIOS.value ? {} : { level: "2" }));
</script>

<template>
	<Tappable
		v-bind="forwardedProps"
		:as
		:class="[
			$style.wrapper,
			platform === 'ios' && $style['wrapper--ios'],
			hovered && $style['wrapper--hovered'],
			multiline && $style['wrapper--multiline'],
			props.class,
		]"
	>
		<div v-if="$slots['before']" :class="$style.before">
			<slot name="before" />
		</div>

		<div :class="$style.middle">
			<Subheadline v-if="$slots['subhead']" :class="$style.subhead" level="2" weight="3">
				<slot name="subhead" />
			</Subheadline>

			<component :is="titleComponent" v-bind="titleProps" :class="$style.head">
				<span v-if="$slots['default']" :class="$style.title"><slot name="default" /></span>
				<span v-if="$slots['hint']" :class="$style.hint"><slot name="hint" /></span>
				<slot name="badge" />
			</component>

			<Subheadline v-if="$slots['subtitle']" :class="$style.subtitle" level="2" weight="3">
				<slot name="subtitle" />
			</Subheadline>

			<component :is="descriptionComponent" v-bind="descriptionProps" :class="$style.description">
				<slot name="description" />
			</component>
		</div>

		<div v-if="$slots['after']" :class="$style.after">
			<slot name="after" />
		</div>
	</Tappable>
</template>

<style module>
.wrapper {
	--tgui--cell--middle--padding: 16px 0;

	display: flex;
	align-items: center;
	gap: 24px;
	padding: 0 24px;
}

.wrapper--ios {
	gap: 16px;
}

.wrapper--hovered {
	background: var(--tgui--tertiary_bg_color);
}

.before,
.after {
	display: flex;
	align-items: center;
	justify-content: center;
}

.middle {
	display: flex;
	flex-direction: column;
	gap: 2px;

	flex-grow: 1;
	max-inline-size: 100%;
	min-inline-size: 0;

	padding: var(--tgui--cell--middle--padding);
}

.middle > *,
.title {
	overflow: hidden;
	text-overflow: ellipsis;
}

.wrapper:not(.wrapper--multiline) .middle > *,
.wrapper:not(.wrapper--multiline) .title {
	white-space: nowrap;
}

.subhead {
	color: var(--tgui--subtitle_text_color);
}

.head {
	display: inline-flex;
	align-items: center;
	gap: 4px;
}

.hint {
	color: var(--tgui--hint_color);
}

.subtitle {
	color: var(--tgui--hint_color);
}

.description {
	color: var(--tgui--hint_color);
}

.wrapper--ios {
	--tgui--cell--middle--padding: 12px 0;
	padding: 0 16px;
}

@media (hover: hover) and (pointer: fine) {
	.wrapper:hover {
		background: var(--tgui--tertiary_bg_color);
	}
}
</style>
