<script lang="ts">
import type { TypographyProps } from "@/Typography";

type SubheadlineLevel = "1" | "2";

export interface SubheadlineProps extends TypographyProps {
	/** Determines the size of the subheadline, with `1` being the default and '2' providing a smaller option. */
	level?: SubheadlineLevel;
}
</script>

<script setup lang="ts">
import { useCssModule } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { Typography } from "@/Typography";

const props = withDefaults(defineProps<SubheadlineProps>(), { level: "1", as: "h6", plain: true });
const forwardedProps = reactiveOmit(props, "class", "level");

const style = useCssModule();

const subheadlineLevelStyles: Record<SubheadlineLevel, string> = {
	"1": style["wrapper--1"],
	"2": style["wrapper--2"],
};
</script>

<template>
	<Typography v-bind="forwardedProps" :class="[subheadlineLevelStyles[level], props.class]"><slot /></Typography>
</template>

<style module>
.wrapper--1 {
	font-size: var(--tgui--subheadline1--font_size);
	line-height: var(--tgui--subheadline1--line_height);
}

.wrapper--2 {
	font-size: var(--tgui--subheadline2--font_size);
	line-height: var(--tgui--subheadline2--line_height);
}
</style>
