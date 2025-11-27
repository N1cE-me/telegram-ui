import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Badge from "./Badge.vue";

const meta = {
	title: "Blocks/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		default: { control: "text" },
		type: { control: "inline-radio", options: ["number", "dot"] },
		large: { control: "boolean" },
		mode: { control: "select", options: ["primary", "critical", "secondary", "gray", "white"] },
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: { type: "dot" },
	argTypes: {
		default: { control: false },
		type: { control: false },
		large: { control: false },
		mode: { control: false },
	},
	render: (args) => ({
		components: { Badge },
		setup() {
			return { args };
		},
		template: `
            <Badge type="dot" mode="primary" />
            <Badge type="dot" mode="critical" />
            <Badge type="dot" mode="secondary" />
            <Badge type="dot" mode="gray" />
            <Badge type="dot" mode="white" />
			<br /><br />
			<Badge type="number" mode="primary">50</Badge>
            <Badge type="number" mode="critical">new</Badge>
            <Badge type="number" mode="secondary">text</Badge>
            <Badge type="number" mode="gray">soon</Badge>
            <Badge type="number" mode="white">50</Badge>
        `,
	}),
};

export const Dot: Story = {
	args: {
		type: "dot",
		mode: "primary",
	},
} satisfies Story;

export const Number: Story = {
	args: {
		mode: "primary",
		type: "number",
		default: "50",
	},
} satisfies Story;
