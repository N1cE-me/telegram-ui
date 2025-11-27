import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { h } from "vue";
import { Avatar, AvatarStack } from "@/Avatar";

const meta = {
	title: "Blocks/Avatar/AvatarStack",
	component: AvatarStack,
} satisfies Meta<typeof AvatarStack>;

export default meta;
type Story = StoryObj<typeof meta>;

const AVATAR_URL = "https://avatars.githubusercontent.com/u/84640980?v=4";

export const Preview: Story = {
	args: {
		default: () => [
			h(Avatar, { size: 48, src: AVATAR_URL }),
			h(Avatar, { size: 48, src: AVATAR_URL }),
			h(Avatar, { size: 48, src: AVATAR_URL }),
			h(Avatar, { size: 48, src: AVATAR_URL }),
		],
	},
} satisfies Story;
