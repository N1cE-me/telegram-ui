<script lang="ts">
import type { HTMLAttributes } from "vue";

export interface BlockquoteProps {
	/** Determines the content type within the blockquote, influencing its presentation. */
	type?: "text" | "other";
	class?: HTMLAttributes["class"];
}

interface BlockquoteSlots {
	/** An optional icon displayed in the top right corner of the blockquote. Defaults to a quote icon. */
	icon?: unknown;
	/** The main content of the blockquote. When `type` is 'text', this content is wrapped in a typography component. */
	default?: unknown;
}
</script>

<script setup lang="ts">
import { Icon12Quote } from "@/icons";
import { IconContainer } from "@/IconContainer";
import { Subheadline } from "@/Subheadline";

defineSlots<BlockquoteSlots>();
withDefaults(defineProps<BlockquoteProps>(), {});
</script>

<template>
	<div v-bind="$attrs" :class="[$style.wrapper, $props.class]">
		<Subheadline v-if="type === 'text'" :class="$style.text"><slot /></Subheadline>
		<slot v-else />

		<IconContainer :class="$style.topRightIcon">
			<slot name="icon"><Icon12Quote /></slot>
		</IconContainer>
	</div>
</template>

<style lang="css" module>
.wrapper {
	position: relative;
	padding: 6px 28px 8px 12px;

	border-left: 3px solid var(--tgui--link_color);
	border-radius: 4px;
	background: var(--tgui--secondary_fill);
}

.text {
	color: var(--tgui--text_color);
}

.topRightIcon {
	position: absolute;
	top: 4px;
	right: 6px;

	display: block;
}
</style>
