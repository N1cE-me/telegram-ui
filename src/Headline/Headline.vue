<script lang="ts">
import type { TypographyProps } from "@/Typography";

export interface HeadlineProps extends TypographyProps {}
</script>

<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { Typography } from "@/Typography";

const props = withDefaults(defineProps<HeadlineProps>(), { as: "h5", plain: true });
const forwardedProps = reactiveOmit(props, "class");
</script>

<template>
	<Typography v-bind="forwardedProps" :class="[$style.wrapper, props.class]">
		<slot />
	</Typography>
</template>

<style module>
.wrapper {
	font-size: var(--tgui--headline--font_size);
	line-height: var(--tgui--headline--line_height);
}
</style>
