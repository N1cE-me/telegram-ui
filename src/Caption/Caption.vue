<script lang="ts">
import type { TypographyProps } from "@/Typography";

type CaptionLevel = "1" | "2";

export interface CaptionProps extends Omit<TypographyProps, "plain"> {
	/** The size level of the caption, influencing its styling and typography size. */
	level?: CaptionLevel;
}
</script>

<script setup lang="ts">
import { useCssModule } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { Typography } from "@/Typography";

const props = withDefaults(defineProps<CaptionProps>(), {
	as: "span",
	level: "1",
});

const forwardedProps = reactiveOmit(props, "level", "class");

const styles = useCssModule();

const captionLevelStyles: Record<CaptionLevel, string> = {
	"1": styles["wrapper--1"],
	"2": styles["wrapper--2"],
};
</script>

<template>
	<Typography v-bind="forwardedProps" :class="[$style.wrapper, captionLevelStyles[level], props.class]">
		<slot />
	</Typography>
</template>

<style module>
.wrapper--1 {
	font-size: var(--tgui--caption1--font_size);
	line-height: var(--tgui--caption1--line_height);
}

.wrapper--2 {
	font-size: var(--tgui--caption2--font_size);
	line-height: var(--tgui--caption2--line_height);
}
</style>
