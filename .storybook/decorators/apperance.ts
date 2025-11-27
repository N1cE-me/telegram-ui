import type { Decorator } from "@storybook/vue3-vite";

export const ApperanceDecorator: Decorator = (story, ctx) => ({
	components: { story },
	setup: () => {
		const style = `content: ''; position: absolute; inset: 0; z-index: -1; background-color: ${
			ctx.globals.theme === "dark" ? "#212121" : "#FFF"
		}`;
		return { style, ctx };
	},
	template: `<div><div :style="style"></div><story /></div>`,
});
