<template>
	<hr v-bind="$attrs" :class="$style.wrapper" />
</template>

<style lang="css" module>
.wrapper {
	margin: 0;
	border-top: none;
	border-width: var(--tgui--border--width);
	border-color: var(--tgui--outline);
}
</style>
