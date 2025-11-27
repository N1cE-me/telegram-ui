<script setup lang="ts">
import type { SpinnerProps } from "./Spinner.vue";

// @todo: Move to icons
import IconLarge from "./components/BaseSpinner/icons/Large.vue";
import IconMedium from "./components/BaseSpinner/icons/Medium.vue";
import IconSmall from "./components/BaseSpinner/icons/Small.vue";

interface BaseSpinnerProps {
	size: SpinnerProps["size"];
}

defineProps<BaseSpinnerProps>();

const componentBySize = {
	s: IconSmall,
	m: IconMedium,
	l: IconLarge,
};
</script>

<template>
	<component :is="componentBySize[size]" />
</template>
