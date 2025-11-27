import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { h } from "vue";
import Banner from "./Banner.vue";
import { Image as UiImage } from "@/Image";
import { Button } from "@/Button";
import { List } from "@/List";

const meta = {
	title: "Blocks/Banner",
	component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: {
		type: "section",
		closable: true,
		before: () => h(UiImage, { size: 48 }),
		callout: "Urgent notification",
		header: "Introducing TON Space",
		description: "Start exploring TON in a new, better way",
		default: () => [h(Button, { size: "s" }, "Try it out"), h(Button, { size: "s", mode: "plain" })],
	},
	decorators: [
		(story) => ({
			components: { story, List },
			template: `<List style="background: var(--tgui--secondary_bg_color);"><story /></List>`,
		}),
	],
} satisfies Story;

export const Image: Story = {
	args: {
		type: "section",
		header: "Introducing TON Space",
		subheader: "Start exploring TON in a new, better way",
		closable: true,
		background: () =>
			h("img", {
				alt: "Nasa streams",
				style: "width: 100%;height: 100%;object-fit: cover;",
				src: "https://picsum.photos/1536/864",
			}),
		default: () => h(Button, { size: "s", mode: "white" }, "Try it out"),
	},
	decorators: [
		(story) => ({
			components: { story, List },
			template: `<List style="background: var(--tgui--secondary_bg_color);"><story /></List>`,
		}),
	],
} satisfies Story;

// export const AsStack: Story = {
// 	args: {
// 		// src: "https://avatars.githubusercontent.com/u/84640980?v=4",
// 	},
// 	decorators: [
// 		(story) => ({
// 			components: { story, List },
// 			template: `<AvatarStack><story v-for="i in 4" :key="i" /></AvatarStack>`,
// 		}),
// 	],
// } satisfies Story;
