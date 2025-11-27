<script lang="ts">
import type { TypographyProps } from "@/Typography";

export interface LargeTitleProps extends TypographyProps {}
</script>

<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { Typography } from "@/Typography";

const props = withDefaults(defineProps<LargeTitleProps>(), { as: "h1", plain: true });
const forwardedProps = reactiveOmit(props, "class");
</script>

<template>
	<Typography v-bind="forwardedProps" :class="[$style.wrapper, props.class]">
		<slot />
	</Typography>
</template>

<style module>
.wrapper {
	font-size: var(--tgui--large_title--font_size);
	line-height: var(--tgui--large_title--line_height);
}
</style>
