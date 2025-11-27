import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Subheadline from "./Subheadline.vue";

const meta = {
	title: "Typography/Subheadline",
	component: Subheadline,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		level: { control: "inline-radio", options: ["1", "2"] },
		weight: { control: "inline-radio", options: ["1", "2", "3"] },
		caps: { control: "boolean" },
		default: { control: "text" },
		as: { control: false },
		plain: { control: "boolean" },
	},
} satisfies Meta<typeof Subheadline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: { level: "1", default: "Subheadline" },
};

export const Subheadline1: Story = {
	args: {
		level: "1",
		plain: true,
	},
	argTypes: {
		weight: { control: false },
	},
	render: (args) => ({
		components: { Subheadline },
		setup() {
			return { args };
		},
		template: `
            <Subheadline weight="3" v-bind="args">Subheadline 1 · Regular</Subheadline>
			<Subheadline weight="2" v-bind="args">Subheadline 1 · Semibold</Subheadline>
			<Subheadline weight="1" v-bind="args">Subheadline 1 · Bold</Subheadline>
        `,
	}),
};

export const Subheadline2: Story = {
	args: {
		level: "2",
		plain: true,
	},
	argTypes: {
		weight: { control: false },
	},
	render: (args) => ({
		components: { Subheadline },
		setup() {
			return { args };
		},
		template: `
            <Subheadline weight="3" v-bind="args">Subheadline 2 · Regular</Subheadline>
			<Subheadline weight="2" v-bind="args">Subheadline 2 · Semibold</Subheadline>
			<Subheadline weight="1" v-bind="args">Subheadline 2 · Bold</Subheadline>
        `,
	}),
};
