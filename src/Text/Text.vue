<script lang="ts">
import type { TypographyProps } from "@/Typography";

export interface TextProps extends Omit<TypographyProps, "plain"> {}
</script>

<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { Typography } from "@/Typography";

const props = withDefaults(defineProps<TextProps>(), { as: "span" });
const forwardedProps = reactiveOmit(props, "class");
</script>

<template>
	<Typography v-bind="forwardedProps" :class="[$style.wrapper, props.class]"><slot /></Typography>
</template>

<style module>
.wrapper {
	font-size: var(--tgui--text--font_size);
	line-height: var(--tgui--text--line_height);
}
</style>
