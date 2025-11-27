import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Divider from "./Divider.vue";

const meta = {
	title: "Misc/Divider",
	component: Divider,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// @todo: Update preview
export const Preview: Story = {
	args: {},
};
