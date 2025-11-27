import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Button } from "@/Button";
import FixedLayout from "./FixedLayout.vue";

const meta = {
	title: "Layout/FixedLayout",
	component: FixedLayout,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		vertical: { control: "inline-radio", options: ["top", "bottom"] },
		as: { control: false },
	},
} satisfies Meta<typeof FixedLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
	args: {
		vertical: "top",
	},
	render: (args) => ({
		components: { FixedLayout, Button },
		setup() {
			return { args };
		},
		template: `
		<div style="height:400px;width:400px;border:1px dashed;">
            <FixedLayout v-bind="args" style="padding: 16px;">
				 <Button size="l" stretched>This is FixedLayout</Button>
			</FixedLayout>
		</div>
        `,
	}),
};
