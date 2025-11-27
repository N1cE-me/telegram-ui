import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { h } from "vue";
import { Avatar } from "@/Avatar";
import Chip from "./Chip.vue";

const meta = {
	title: "Form/Chip",
	component: Chip,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		default: { control: "text" },
		as: { control: false },
	},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: {
		default: "Chip",
	},
};

export const WithAvatart: Story = {
	args: {
		default: "Username",
		before: () => h(Avatar, { src: "https://avatars.githubusercontent.com/u/84640980?v=4", size: 20 }),
	},
};
