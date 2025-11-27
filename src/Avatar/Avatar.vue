<script lang="ts">
import { Image, type ImageProps } from "@/Image";
import AvatarAcronym from "./AvatarAcronym.vue";

export interface AvatarProps extends ImageProps {
	/** One or two letters to be shown as a placeholder. `fallback` slot will not be used if `acronym` is provided. */
	acronym?: string;
}

interface AvatarSlots {
	fallback?: unknown;
	default?: unknown;
}
</script>

<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";

const props = withDefaults(defineProps<AvatarProps>(), { size: 40 });
const forwardedProps = reactiveOmit(props, "class");

defineSlots<AvatarSlots>();
</script>

<template>
	<Image
		v-bind="forwardedProps"
		style="border-radius: 50%"
		:class="[$style.wrapper, acronym && $style['wrapper--withAcronym'], props.class]"
	>
		<template #fallback>
			<AvatarAcronym v-if="acronym" :size>{{ acronym }}</AvatarAcronym>
			<slot v-else name="fallback" />
		</template>

		<slot />
	</Image>
</template>

<style module>
.wrapper {
	border-radius: 50%;
}

.wrapper--withAcronym {
	background-color: var(--tgui--secondary_fill);
	color: var(--tgui--link_color);
}
</style>
