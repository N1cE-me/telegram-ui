<script lang="ts">
import type { Component, HTMLAttributes } from "vue";

export interface TypographyProps {
	/** Controls the font weight of the text, with options ranging from light to bold. */
	weight?: "1" | "2" | "3";
	/** If true, transforms the text to uppercase for stylistic emphasis. */
	caps?: boolean;
	/** Specifies the HTML tag or React component used to render the text, defaulting to `span`. */
	as?: string | Component;
	/** When true, removes the default margins around the text, useful for inline styling or custom layouts. */
	plain?: boolean;
	class?: HTMLAttributes["class"];
}
</script>

<script setup lang="ts">
import { useCssModule } from "vue";

const props = withDefaults(defineProps<TypographyProps>(), { weight: "3", as: "span", plain: true });

const styles = useCssModule();

const stylesWeight = {
	"1": styles["wrapper--weight-1"],
	"2": styles["wrapper--weight-2"],
	"3": styles["wrapper--weight-3"],
};
</script>

<template>
	<component
		v-bind="$attrs"
		:is="as"
		:class="[
			$style.wrapper,
			plain && $style['wrapper--plain'],
			caps && $style['wrapper--caps'],
			stylesWeight[weight],
			props.class,
		]"
	>
		<!-- @todo: Refactor this -->
		<!-- @vue-ignore -->
		<template v-for="(_, name) in $slots" #[name]="scope">
			<slot :name v-bind="scope ?? {}" />
		</template>
	</component>
</template>

<style module>
.wrapper {
	font-family: var(--tgui--font-family);
}

.wrapper--plain {
	margin: 0;
}

.wrapper--caps {
	text-transform: uppercase;
}

.wrapper--weight-1 {
	font-weight: var(--tgui--font_weight--accent1);
}

.wrapper--weight-2 {
	font-weight: var(--tgui--font_weight--accent2);
}

.wrapper--weight-3 {
	font-weight: var(--tgui--font_weight--accent3);
}
</style>
