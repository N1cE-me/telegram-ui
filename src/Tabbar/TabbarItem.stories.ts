import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Icon28Devices } from "@/icons";
import TabbarItem from "./TabbarItem.vue";
import { h } from "vue";

const meta = {
	title: "Layout/Tabbar/TabbarItem",
	component: TabbarItem,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof TabbarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: {
		text: "Hello",
		default: () => h(Icon28Devices)
	},
};
