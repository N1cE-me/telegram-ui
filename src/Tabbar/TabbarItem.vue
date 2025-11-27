<script lang="ts">
import type { HTMLAttributes } from "vue";

export interface TabbarItemProps {
	/** Indicates whether the tab is selected or active. */
	selected?: boolean;
	/** The text displayed on the tab. */
	text?: string;

	class?: HTMLAttributes["class"];
}

interface TabbarItemSlots {
	/** The icon displayed on the tab. It should be passed as a Vue Component with dimensions of 28x28. */
	default(): unknown;
}
</script>

<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { usePlatform } from "@/shared";
import { Caption } from "@/Caption";
import { Tappable } from "@/Tappable";

const props = defineProps<TabbarItemProps>();
const forwardedProps = reactiveOmit(props, "class");
defineSlots<TabbarItemSlots>();

const platform = usePlatform();
</script>

<template>
	<Tappable
		v-bind="forwardedProps"
		as="button"
		interactive-animation="opacity"
		:class="[
			$style.wrapper,
			platform === 'ios' && $style['wrapper--ios'],
			selected && $style['wrapper--selected'],
			props.class,
		]"
	>
		<div v-if="$slots['default']" :class="$style.icon">
			<slot />
		</div>

		<Caption v-if="text" :class="$style.text" weight="2" :level="platform === 'ios' ? '2' : '1'">
			{{ text }}
		</Caption>
	</Tappable>
</template>

<style lang="css" module>
.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 6px;

	flex: 1 0 0;
	max-inline-size: 100%;
	min-inline-size: 0;

	padding: 12px 16px 16px;
	margin: 0;
	border: none;
	background: transparent;

	transition: 0.15s ease-out;
	color: var(--tgui--secondary_hint_color);
}

.wrapper--ios {
	padding: 8px 12px 4px;
	gap: 4px;
}

.wrapper--selected {
	color: var(--tgui--link_color);
}

.wrapper--selected:not(.wrapper--ios) .icon {
	background: var(--tgui--secondary_fill);
}

.icon {
	display: flex;
	justify-content: center;
	min-width: 64px;
	padding: 2px 10px;
	border-radius: 35px;
}

.wrapper--ios .icon {
	padding: 0;
}

.text {
	white-space: nowrap;
	max-inline-size: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
