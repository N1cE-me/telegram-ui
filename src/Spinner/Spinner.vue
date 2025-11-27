<script lang="ts">
export interface SpinnerProps {
	/** Determines the size of the spinner. Can be 'small' (s), 'medium' (m), or 'large' (l), with 'medium' being the default size. */
	size: "s" | "m" | "l";
}
</script>

<script setup lang="ts">
import { usePlatform } from "@/shared";
import BaseSpinner from "./BaseSpinner.vue";
import IOSSpinner from "./IOSSpinner.vue";

withDefaults(defineProps<SpinnerProps>(), {
	size: "m",
});

const platform = usePlatform();
</script>

<template>
	<div role="status" :class="[$style.wrapper, platform === 'ios' && $style['wrapper--ios']]">
		<component :size :is="platform === 'ios' ? IOSSpinner : BaseSpinner" />
	</div>
</template>

<style module>
.wrapper {
	color: var(--tgui--link_color);
}

.wrapper--ios {
	color: var(--tgui--hint_color);
}
</style>
