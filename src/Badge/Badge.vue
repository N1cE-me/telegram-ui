<script lang="ts">
import type { HTMLAttributes } from "vue";

export interface BadgeProps {
	/** The visual style of the badge: 'number' displays the content, 'dot' shows a simple dot. */
	type: "number" | "dot";
	/** The color scheme of the badge, affecting its background and text color. */
	mode?: "primary" | "critical" | "secondary" | "gray" | "white";
	/** Increases the size of the badge. Applicable only when `type` is 'number'. */
	large?: boolean;
	class?: HTMLAttributes["class"];
}
</script>

<script setup lang="ts">
import { computed, useCssModule } from "vue";
import { Subheadline } from "@/Subheadline";
import { Caption } from "@/Caption";

const props = withDefaults(defineProps<BadgeProps>(), { mode: "primary" });
const styles = useCssModule();

const isNumber = computed(() => props.type === "number");

const typeStyles = {
	number: styles["wrapper--number"],
	dot: styles["wrapper--dot"],
};

const modeStyles = {
	primary: styles["wrapper--primary"],
	critical: styles["wrapper--critical"],
	secondary: styles["wrapper--secondary"],
	gray: styles["wrapper--gray"],
	white: styles["wrapper--white"],
};
</script>

<template>
	<span :class="[$style.wrapper, typeStyles[type], modeStyles[mode], isNumber && large && $style['wrapper--large'], props.class]">
		<template v-if="$slots.default && isNumber">
			<Subheadline v-if="large" as="span" level="2" weight="2"><slot /></Subheadline>
			<Caption v-else weight="2"><slot /></Caption>
		</template>
	</span>
</template>

<style module>
.wrapper--number {
	display: inline-flex;
	align-items: center;
	justify-content: center;

	height: 20px;
	min-width: 20px;

	margin: 0 6px;
	padding: 0 5px;

	box-sizing: border-box;
	border-radius: 20px;
}

.wrapper--large {
	height: 24px;
	padding: 0 6px;
}

.wrapper--dot {
	display: inline-block;

	width: 6px;
	height: 6px;

	margin: 7px;
	border-radius: 50%;
}

.wrapper--primary {
	color: var(--tgui--button_text_color);
	background: var(--tgui--button_color);
}

.wrapper--critical {
	color: var(--tgui--button_text_color);
	background: var(--tgui--destructive_text_color);
}

.wrapper--secondary {
	color: var(--tgui--link_color);
	background: var(--tgui--secondary_fill);
}

.wrapper--gray {
	color: var(--tgui--plain_foreground);
	background: var(--tgui--plain_background);
}

.wrapper--white {
	color: var(--tgui--link_color);
	background: var(--tgui--white);
}
</style>
