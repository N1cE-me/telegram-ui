import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Blockquote from "./Blockquote.vue";
import { h } from "vue";
import { Image } from "@/Image";

const meta = {
	title: "Blocks/Blockquote",
	component: Blockquote,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		default: { control: "text" },
	},
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: {
		type: "text",
		default:
			"There is grandeur in this view of life, with its several powers, having been originally breathed by the Creator into a few forms or into one; and that, whilst this planet has gone circling on according to the fixed law of gravity, from so simple a beginning endless forms most beautiful and most wonderful have been, and are being evolved.",
	},
} satisfies Story;

export const WithCustomContent: Story = {
	args: {
		type: "other",
		default: () => [
			h(Image, { size: 96 }),
			"There is grandeur in this view of life, with its several powers, having been originally breathed by the Creator into a few forms...",
		],
	},
} satisfies Story;

export const WithCustomIcon: Story = {
	args: {
		type: "text",
		icon: () => h("span", null, "👀"),
		default:
			"There is grandeur in this view of life, with its several powers, having been originally breathed by the Creator into a few forms or into one; and that, whilst this planet has gone circling on according to the fixed law of gravity, from so simple a beginning endless forms most beautiful and most wonderful have been, and are being evolved.",
	},
} satisfies Story;
