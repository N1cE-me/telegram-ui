import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { h } from "vue";
import { Avatar, AvatarBadge, AvatarStack } from "@/Avatar";
import { Icon28Stats } from "@/icons";

const meta = {
	title: "Blocks/Avatar",
	component: Avatar,
} satisfies Meta<typeof Avatar>;

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
		default: () => h(AvatarBadge, null, () => "42"),
	},
} satisfies Story;

export const WithAcronym: Story = {
	args: {
		size: 96,
		acronym: "IS",
	},
} satisfies Story;

export const AsStack: Story = {
	args: {
		size: 48,
		src: "https://avatars.githubusercontent.com/u/84640980?v=4",
	},
	decorators: [
		(story) => ({
			components: { story, AvatarStack },
			template: `<AvatarStack><story v-for="i in 4" :key="i" /></AvatarStack>`,
		}),
	],
} satisfies Story;

export const WithChildren: Story = {
	args: {
		size: 48,
		default: () => h(Icon28Stats),
	},
} satisfies Story;
