import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Image, ImageBadge } from "@/Image";

const meta = {
	title: "Blocks/Image/ImageBadge",
	component: ImageBadge,
	argTypes: {
		large: { control: "boolean" },
		mode: { control: "select", options: ["primary", "critical", "secondary", "gray", "white"] },
	},
	decorators: [
		(story) => ({
			components: { story, Image },
			template: `<Image><story /></Image>`,
		}),
	],
} satisfies Meta<typeof ImageBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: {
		default: "10",
		mode: "primary",
	},
} satisfies Story;
