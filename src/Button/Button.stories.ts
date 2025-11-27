import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Button.vue";

const meta = {
	title: "Blocks/Button",
	component: Button,
	parameters: {
		layout: "centered",
		design: {
			type: "figma",
			url: "https://www.figma.com/design/TzZK6TPS5jdILmAZjGnLE9/Telegram-Mini-Apps-%C2%B7-UI-Kit--Community-?node-id=45-609&t=jQdc6EDPRH5V1FgZ-1",
		},
	},
	argTypes: {
		size: { control: "inline-radio", options: ["s", "m", "l"] },
		mode: { control: "select", options: ["filled", "bezeled", "plain", "gray", "outline", "white"] },
		type: { control: "text" },
		default: { control: "text", description: "Default slot" },
		stretched: { control: "boolean" },
		loading: { control: "boolean" },
		disabled: { control: "boolean" },
		before: { control: false },
		after: { control: false },
		as: { control: false },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	args: {
		size: "s",
		mode: "filled",
		default: "Action",
		disabled: false,
	},
};

// export const WithIcon: Story = {
//   args: {
//     size: 's',
//     mode: 'filled',
//     children: 'Create channel',
//   },
//   render: (args) => (
//     <Button
//       before={args.size === 's' ? <Icon20Copy /> : <Icon24PersonRemove />}
//       {...args}
//     />
//   ),
// } satisfies Story;

export const Link: Story = {
	args: {
		size: "s",
		mode: "filled",
		default: "No hello",
		// @ts-expect-error Not error
		target: "_blank",
		href: "https://nohello.net/en/",
		as: "a",
	},
} satisfies Story;
