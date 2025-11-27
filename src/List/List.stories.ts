import type { Meta, StoryObj } from "@storybook/vue3-vite";
import List from "./List.vue";

const meta = {
	title: "Blocks/List",
	component: List,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		as: { control: false },
	},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

// @todo: Add example
export const Preview: Story = {
	args: {},
};
