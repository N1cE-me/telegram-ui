import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { h } from "vue";
import { Badge } from "@/Badge";
import { Avatar } from "@/Avatar";
import Cell from "./Cell.vue";

const meta = {
	title: "Blocks/Cell",
	component: Cell,
	parameters: {
		// layout: "centered",
	},
	argTypes: {
		default: { control: "text" },
		as: { control: false },
	},
} satisfies Meta<typeof Cell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: {
		subhead: "Subhead",
		default: "Title",
		subtitle: "Subtitle",
		description: "Description",
		badge: () => h(Badge, { type: "dot" }),
		before: () => h(Avatar, { size: 48 }),
		after: () => h(Badge, { type: "number" }, "99"),
	},
};
