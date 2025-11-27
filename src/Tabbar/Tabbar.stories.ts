import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Icon28Devices, Icon28Chat, Icon28Stats } from "@/icons";
import Tabbar from "./Tabbar.vue";
import TabbarItem from "./TabbarItem.vue";
import { ref } from "vue";

const meta = {
	title: "Layout/Tabbar",
	component: Tabbar,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Tabbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	render: (args) => ({
		components: { Tabbar, TabbarItem, Icon28Devices, Icon28Chat },
		setup() {
			const selected = ref("Devices");
			const tabs = [
				{ name: "Devices", icon: Icon28Devices },
				{ name: "Chat", icon: Icon28Chat },
				{ name: "Stats", icon: Icon28Stats },
			];
			return { args, selected, tabs };
		},
		template: `
            <Tabbar v-bind="args">
				 <TabbarItem v-for="tab in tabs" :text="tab.name" :selected="tab.name === selected" @click="() => (selected = tab.name)"><component :is="tab.icon" /></TabbarItem>
			</Tabbar>
        `,
	}),
	decorators: [
		(story) => ({
			components: { story },
			template: `<div style="height:200px;min-width: 500px"><story /></div>`,
		}),
	],
};
