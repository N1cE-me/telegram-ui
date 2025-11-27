import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Avatar, AvatarBadge } from "@/Avatar";

const meta = {
	title: "Blocks/Avatar/AvatarBadge",
	component: AvatarBadge,
	argTypes: {
		large: { control: "boolean" },
		mode: { control: "select", options: ["primary", "critical", "secondary", "gray", "white"] },
	},
	decorators: [
		(story) => ({
			components: { story, Avatar },
			template: `<Avatar><story /></Avatar>`,
		}),
	],
} satisfies Meta<typeof AvatarBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: {
		default: "10",
		mode: "primary",
	},
} satisfies Story;
