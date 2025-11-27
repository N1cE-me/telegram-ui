<script lang="ts">
import type { Component, HTMLAttributes } from "vue";

export interface ListProps {
	/** Specifies the HTML tag or React component used to render the list, defaulting to `div`. */
	as?: string | Component;

	class?: HTMLAttributes["class"];
}
</script>

<script setup lang="ts">
import { usePlatform } from "@/shared";

const props = withDefaults(defineProps<ListProps>(), { as: "div" });

const platform = usePlatform();
</script>

<template>
	<component
		v-bind="$attrs"
		:is="as"
		:class="[$style.wrapper, platform === 'ios' && $style['wrapper--ios'], props.class]"
	>
		<!-- @todo: Refactor this -->
		<!-- @vue-ignore -->
		<template v-for="(_, name) in $slots" #[name]="scope">
			<slot :name v-bind="scope ?? {}" />
		</template>
	</component>
</template>

<style module>
.wrapper > :not(:last-child) {
	margin-bottom: 12px;
}

.wrapper--ios {
	padding: 10px 18px;
	box-sizing: border-box;
}
</style>
