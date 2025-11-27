import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Text from "./Text.vue";

const meta = {
	title: "Typography/Text",
	component: Text,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		weight: { control: "inline-radio", options: ["1", "2", "3"] },
		caps: { control: "boolean" },
		default: { control: "text" },
		as: { control: false },
	},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: { default: "Lorem Ipsum" },
};
