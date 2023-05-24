import type { Meta, StoryObj } from "@storybook/react";
import StandWithUkraine from "./StandWithUkraine";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof StandWithUkraine> = {
  title: "Components/StandWithUkraine",
  component: StandWithUkraine,
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof StandWithUkraine>;

export const banner: Story = {
  args: {
  },
};

