<script lang="ts">
import type { HTMLAttributes } from "vue";

export interface TabbarProps {
	class?: HTMLAttributes["class"];
}
</script>

<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { usePlatform } from "@/shared";
import { FixedLayout } from "@/FixedLayout";

const props = defineProps<TabbarProps>();
const forwardedProps = reactiveOmit(props, "class");

const platform = usePlatform();
</script>

<template>
	<FixedLayout
		v-bind="forwardedProps"
		:class="[$style.wrapper, platform === 'ios' && $style['wrapper--ios'], props.class]"
	>
		<slot />
	</FixedLayout>
</template>

<style lang="css" module>
.wrapper {
	display: flex;
	justify-items: stretch;

	box-shadow: 0 -1px 0 var(--tgui--divider);
	background: var(--tgui--surface_primary);
	padding: 0 16px;
}

.wrapper--ios {
	padding: 0;
}
</style>
