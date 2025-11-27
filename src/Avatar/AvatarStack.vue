<script lang="ts">
interface AvatarStackSlots {
	/** An array of `Avatar` components to be rendered within the stack. */
	default?: unknown;
}
</script>

<script setup lang="ts">
defineSlots<AvatarStackSlots>();
</script>

<template>
	<div v-bind="$attrs" :class="$style.wrapper">
		<slot />
	</div>
</template>

<style module>
.wrapper {
	display: flex;
}

.wrapper > :not(:first-child) {
	margin-left: -12px;
}

.wrapper > * {
	box-shadow: 0 0 0 3px var(--tgui--bg_color);
}
</style>
