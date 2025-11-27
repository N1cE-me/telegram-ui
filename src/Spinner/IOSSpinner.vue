<script setup lang="ts">
import type { SpinnerProps } from "./Spinner.vue";

// @todo: Move to icons
import IconLarge from "./components/IOSSpinner/icons/Large.vue";
import IconMedium from "./components/IOSSpinner/icons/Medium.vue";
import IconSmall from "./components/IOSSpinner/icons/Small.vue";

interface IOSSpinnerProps {
	size: SpinnerProps["size"];
}

defineProps<IOSSpinnerProps>();

const componentBySize = {
	s: IconSmall,
	m: IconMedium,
	l: IconLarge,
};
</script>

<template>
	<component :is="componentBySize[size]" />
</template>
