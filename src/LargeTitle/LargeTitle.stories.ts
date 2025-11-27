import type { Meta, StoryObj } from "@storybook/vue3-vite";
import LargeTitle from "./LargeTitle.vue";

const meta = {
	title: "Typography/LargeTitle",
	component: LargeTitle,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		weight: { control: "inline-radio", options: ["1", "2", "3"] },
		caps: { control: "boolean" },
		plain: { control: "boolean" },
		default: { control: "text" },
		as: { control: false },
	},
} satisfies Meta<typeof LargeTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: { default: "Lorem Ipsum" },
};
