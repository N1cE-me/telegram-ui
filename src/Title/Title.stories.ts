import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Title from "./Title.vue";

const meta = {
	title: "Typography/Title",
	component: Title,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		level: { control: "inline-radio", options: ["1", "2", "3"] },
		weight: { control: "inline-radio", options: ["1", "2", "3"] },
		caps: { control: "boolean" },
		plain: { control: "boolean" },
		default: { control: "text" },
		as: { control: false },
	},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: { level: "2", default: "Lorem Ipsum" },
} satisfies Story;
