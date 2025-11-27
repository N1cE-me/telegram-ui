<script lang="ts">
import type { TypographyProps } from "@/Typography";

type TitleLevel = "1" | "2" | "3";

export interface TitleProps extends TypographyProps {
	/** Determines the size and semantic tag of the title, with options for `h2`, `h3`, or `h4`. */
	level?: TitleLevel;
}
</script>

<script setup lang="ts">
import { useCssModule } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { Typography } from "@/Typography";

const props = withDefaults(defineProps<TitleProps>(), { level: "2", plain: true });
const forwardedProps = reactiveOmit(props, "class", "as");

const styles = useCssModule();

const titleLevelTags: Record<TitleLevel, string> = {
	"1": "h2",
	"2": "h3",
	"3": "h4",
};
const titleLevelStyles: Record<TitleLevel, string> = {
	"1": styles["wrapper--1"],
	"2": styles["wrapper--2"],
	"3": styles["wrapper--3"],
};
</script>

<template>
	<Typography
		v-bind="forwardedProps"
		:class="[titleLevelStyles[level], props.class]"
		:as="as || titleLevelTags[level]"
	>
		<slot />
	</Typography>
</template>

<style module>
.wrapper--1 {
	font-size: var(--tgui--title1--font_size);
	line-height: var(--tgui--title1--line_height);
}

.wrapper--2 {
	font-size: var(--tgui--title2--font_size);
	line-height: var(--tgui--title2--line_height);
}

.wrapper--3 {
	font-size: var(--tgui--title3--font_size);
	line-height: var(--tgui--title3--line_height);
}
</style>
