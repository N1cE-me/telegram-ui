import type { Decorator } from "@storybook/vue3-vite";
import { AppRoot } from "@/AppRoot";

export const AppRootDecorator: Decorator = (story, ctx) => ({
	components: { story, AppRoot },
	setup: () => {
		return { ctx };
	},
	template: `<AppRoot :platform="ctx.globals.platform" :appearance="ctx.globals.theme"><story /></AppRoot>`,
});
