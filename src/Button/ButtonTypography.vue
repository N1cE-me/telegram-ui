<script lang="ts">
import type { TypographyProps } from "@/Typography";

export interface ButtonTypographyProps extends Omit<TypographyProps, "size"> {
	size: "s" | "m" | "l";
}
</script>

<script setup lang="ts">
import { Subheadline } from "@/Subheadline";
import { Text } from "@/Text";

defineProps<ButtonTypographyProps>();
</script>

<template>
	<Text v-bind="$attrs" v-if="size === 'l'" weight="2"><slot /></Text>
	<Subheadline v-bind="$attrs" v-else level="2" weight="2"><slot /></Subheadline>
</template>
