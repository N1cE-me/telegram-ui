import type { Preview } from "@storybook/vue3-vite";
import { AppRootDecorator } from "./decorators/root";
import { ApperanceDecorator } from "./decorators/apperance";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},
		backgrounds: { disable: true },
		centered: true,
	},
	tags: ["autodocs"],
	globalTypes: {
		platform: {
			name: "Platform",
			description: "Platform for components",
			defaultValue: "base",
			toolbar: {
				icon: "mobile",
				items: ["base", "ios"],
				title: "Platform",
				dynamicTitle: true,
			},
		},
		theme: {
			description: "Global theme for components",
			defaultValue: "light",
			toolbar: {
				title: "Theme",
				icon: "circlehollow",
				items: ["light", "dark"],
				dynamicTitle: true,
			},
		},
	},
	decorators: [ApperanceDecorator, AppRootDecorator],
};

export default preview;
