<script lang="ts">
import type { BadgeProps } from "@/Badge";
import { reactiveOmit } from "@vueuse/core";

export interface AvatarBadgeProps extends Omit<BadgeProps, "type"> {}
</script>

<script setup lang="ts">
import { Badge } from "@/Badge";

const props = defineProps<AvatarBadgeProps>();
const forwardedProps = reactiveOmit(props, "class");
</script>

<template>
	<Badge v-bind="forwardedProps" type="number" :class="[$style.wrapper, props.class]">
		<slot />
	</Badge>
</template>

<style lang="css" module>
.wrapper {
	position: absolute;
	right: -12px;
	top: 0;
}
</style>
