import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Spinner from "./Spinner.vue";

const meta = {
	title: "Feedback/Spinner",
	component: Spinner,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		size: { control: "inline-radio", options: ["s", "m", "l"] },
	},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	args: { size: "s" },
};
