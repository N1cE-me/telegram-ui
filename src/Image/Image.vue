<script lang="ts">
import type { ImgHTMLAttributes } from "vue";

export interface ImageProps {
	/** Specifies the size of the image, with a default of 40. Sizes are defined in pixels. */
	size?: 20 | 24 | 28 | 40 | 48 | 96;
	alt?: ImgHTMLAttributes["alt"];
	crossorigin?: ImgHTMLAttributes["crossorigin"];
	decoding?: ImgHTMLAttributes["decoding"];
	loading?: ImgHTMLAttributes["loading"];
	referrerpolicy?: ImgHTMLAttributes["referrerpolicy"];
	sizes?: ImgHTMLAttributes["sizes"];
	src?: ImgHTMLAttributes["src"];
	srcset?: ImgHTMLAttributes["srcset"];
	usemap?: ImgHTMLAttributes["usemap"];
	class?: ImgHTMLAttributes["class"];
}

interface ImageSlots {
	fallback: unknown;
	default: unknown;
}

interface ImageEmits {
	load: [value: Event];
	error: [value: Event];
}
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import { getBorderRadius } from "./utils";

const props = withDefaults(defineProps<ImageProps>(), { size: 40 });
const emit = defineEmits<ImageEmits>();
const slots = defineSlots<ImageSlots>();

const isLoaded = ref(false);
const isFailed = ref(false);

const hasSrc = computed(() => props.src || props.srcset);
const needShowFallbackIcon = computed(() => (isFailed.value || !hasSrc.value) && slots.fallback);

const onImageLoad = (event: Event) => {
	if (isLoaded.value) return;

	isLoaded.value = true;
	isFailed.value = false;

	emit("load", event);
};

const onImageError = (event: Event) => {
	isLoaded.value = false;
	isFailed.value = true;

	emit("error", event);
};
</script>

<template>
	<div
		:class="[$style.wrapper, isLoaded && $style['wrapper--loaded'], props.class]"
		:style="{
			width: `${size}px`,
			minWidth: `${size}px`,
			height: `${size}px`,
			borderRadius: `${getBorderRadius(size)}px`,
		}"
	>
		<img
			v-if="hasSrc"
			:alt
			:crossorigin
			:decoding
			:loading
			:referrerpolicy
			:sizes
			:src
			:srcset
			:usemap
			:class="$style.image"
			@load="onImageLoad"
			@error="onImageError"
		/>

		<div v-if="needShowFallbackIcon" :class="$style.fallback">
			<slot name="fallback" />
		</div>
		<slot />
	</div>
</template>

<style lang="css" module>
.wrapper {
	position: relative;
	background-color: var(--tgui--tertiary_bg_color);

	display: flex;
	align-items: center;
	justify-content: center;

	box-shadow: 0 0 0 1px var(--tgui--outline);
}

.image {
	position: absolute;
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	visibility: hidden;
	border-radius: inherit;
}

.wrapper--loaded .image {
	visibility: visible;
}

.fallback {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
