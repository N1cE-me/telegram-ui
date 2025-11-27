import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { h } from "vue";
import Image from "./Image.vue";
import ImageBadge from "./ImageBadge.vue";
import { Icon28Stats } from "@/icons";

const meta = {
	title: "Blocks/Image",
	component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ValidImage: Story = {
	args: {
		size: 96,
		src: "https://avatars.githubusercontent.com/u/84640980?v=4",
	},
} satisfies Story;

export const InvalidImage: Story = {
	args: {
		size: 96,
		src: "https://avatars.gitontent.com/u/84640980?v=4",
	},
} satisfies Story;

export const WithFallback: Story = {
	args: {
		size: 96,
		src: "https://avatars.gitontent.com/u/84640980?v=4",
		fallback: () => h("span", null, "😕"),
	},
} satisfies Story;

export const WithBadge: Story = {
	args: {
		size: 48,
		src: "https://avatars.githubusercontent.com/u/84640980?v=4",
		fallback: () => h("span", null, "😕"),
		default: () => h(ImageBadge, null, () => "42"),
	},
} satisfies Story;

export const WithChildren: Story = {
	args: {
		size: 48,
		default: () => h(Icon28Stats),
	},
} satisfies Story;
