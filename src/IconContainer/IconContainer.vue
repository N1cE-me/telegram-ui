<script lang="ts">
import type { HTMLAttributes } from "vue";

export interface IconContainerProps {
	class: HTMLAttributes["class"];
}
</script>

<script setup lang="ts">
defineProps<IconContainerProps>();
</script>

<template>
	<div v-bind="$attrs" :class="[$style.wrapper, $props.class]">
		<slot />
	</div>
</template>

<style lang="css" module>
.wrapper {
	color: var(--tgui--link_color);
}
</style>
