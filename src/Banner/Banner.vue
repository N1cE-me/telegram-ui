<script lang="ts">
import type { HTMLAttributes } from "vue";

export interface BannerProps {
	/** Specifies the banner's layout style, which can affect its positioning and styling. */
	type?: "section" | "inline";
	/** If not provided, the close icon is not displayed. */
	closable?: boolean;

	class?: HTMLAttributes["class"];
}

interface BannerSlots {
	/** Element(s) to be placed on the left side of the banner, typically an icon or an image. */
	before?: unknown;
	/** Content displayed above the main content as a subheading */
	callout?: unknown;
	/** The main text or title displayed in the banner. */
	header?: unknown;
	/** Additional information or subtext displayed below the header. */
	subheader?: unknown;
	/** Further details or description provided under the subheader. */
	description?: unknown;
	/** Custom background component or design, such as an image or gradient, that covers the banner's area. */
	background?: unknown;
	/** Content or components, such as buttons, displayed within the banner. For multiple elements */
	default?: unknown;
}

interface BannerEmits {
	/** Callback event that is executed when the close icon of the banner is clicked.  */
	close: [value: Event];
}
</script>

<script setup lang="ts">
import { Caption } from "@/Caption";
import { Icon24Cancel, Icon28Close, Icon28CloseAmbient } from "@/icons";
import { usePlatform } from "@/shared";
import { Subheadline } from "@/Subheadline";
import { Tappable } from "@/Tappable";
import { Text } from "@/Text";

const props = defineProps<BannerProps>();
const emit = defineEmits<BannerEmits>();
const slots = defineSlots<BannerSlots>();

const platform = usePlatform();
</script>

<template>
	<section
		v-bind="$attrs"
		:class="[
			$style.wrapper,
			platform === 'ios' && $style['wrapper--ios'],
			platform === 'base' && $style['wrapper--base'],
			slots.background && $style['wrapper--withBackground'],
			type === 'inline' && $style['wrapper--inline'],
			props.class,
		]"
	>
		<div v-if="slots.background" :class="$style.background">
			<slot name="background" />
		</div>

		<slot name="before" />

		<div :class="$style.middle">
			<Subheadline v-if="slots.callout" :class="$style.subheader" level="2">
				<slot name="callout" />
			</Subheadline>
			<Text v-if="slots.header" :class="$style.title" weight="2">
				<slot name="header" />
			</Text>
			<Subheadline v-if="slots.subheader" :class="$style.subheader" level="2">
				<slot name="subheader" />
			</Subheadline>
			<template v-if="slots.description">
				<Caption v-if="platform === 'ios'" level="1" :class="$style.description">
					<slot name="description" />
				</Caption>
				<Subheadline v-else level="2">
					<slot name="description" />
				</Subheadline>
			</template>
			<div v-if="slots.default" :class="$style.buttons">
				<slot name="default" />
			</div>
		</div>

		<Tappable v-if="closable" @click="emit('close', $event)" :class="$style.close" as="div">
			<Icon28CloseAmbient v-if="slots.background" />
			<Icon24Cancel v-else-if="platform === 'ios'" />
			<Icon28Close v-else />
		</Tappable>
	</section>
</template>

<style lang="css" module>
.wrapper {
	overflow: hidden;
	position: relative;

	display: flex;
	gap: 20px;
	padding: 16px 20px;
	background: var(--tgui--bg_color);
}

.wrapper--base:not(.wrapper--withBackground) {
	box-shadow: var(--tgui--base--section--box_shadow);
}

.wrapper--ios {
	border-radius: 16px;
}

.wrapper--withBackground {
	padding: 20px;
}

.wrapper--withBackground .title {
	color: var(--tgui--white);
}

.wrapper--withBackground .subheader {
	opacity: 0.8;
	color: var(--tgui--white);
}

.wrapper--inline {
	background: var(--tgui--bg_color);
}

.wrapper--base.wrapper--inline {
	margin: 8px 20px;
	border-radius: 16px;
	border: 1px solid var(--tgui--outline);
	box-shadow: none;
}

.wrapper--ios.wrapper--inline {
	margin: 8px 16px;
	background: var(--tgui--quartenary_bg_color);
}

.background {
	position: absolute;
	inset: 0;
}

.middle {
	flex: 1 1 0;
	display: flex;
	flex-direction: column;
	gap: 2px;
	z-index: var(--tgui--z-index--simple);
}

.subheader {
	color: var(--tgui--subtitle_text_color);
}

.description {
	color: var(--tgui--hint_color);
}

.buttons {
	display: flex;
	gap: 4px;
	margin-top: 10px;
}

.close {
	height: 28px;
	border-radius: 50%;
}
</style>
