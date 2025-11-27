import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Caption from "./Caption.vue";

const meta = {
	title: "Typography/Caption",
	component: Caption,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		level: { control: "inline-radio", options: ["1", "2"] },
		weight: { control: "inline-radio", options: ["1", "2", "3"] },
		caps: { control: "boolean" },
		default: { control: "text" },
		as: { control: false },
	},
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: { level: "1", default: "Caption" },
};
