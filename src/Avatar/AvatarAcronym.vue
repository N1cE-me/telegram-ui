<script lang="ts">
import type { ImageProps } from "@/Image";
import type { TypographyProps } from "@/Typography";

export interface AvatarAcronymProps extends TypographyProps {
	size: NonNullable<ImageProps["size"]>;
}
</script>

<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { Caption } from "@/Caption";
import { Headline } from "@/Headline";
import { Title } from "@/Title";
import { LargeTitle } from "@/LargeTitle";

const props = defineProps<AvatarAcronymProps>();
const forwardedProps = reactiveOmit(props, "class");
</script>

<template>
	<Caption v-bind="forwardedProps" v-if="size <= 28" :level="size <= 24 ? '2' : '1'" weight="1" caps>
		<slot />
	</Caption>
	<Headline v-bind="forwardedProps" v-else-if="size <= 40" weight="2" caps><slot /></Headline>
	<Title v-bind="forwardedProps" v-else-if="size <= 48" weight="1" level="3" caps><slot /></Title>
	<LargeTitle v-bind="forwardedProps" v-else weight="1" caps><slot /></LargeTitle>
</template>
