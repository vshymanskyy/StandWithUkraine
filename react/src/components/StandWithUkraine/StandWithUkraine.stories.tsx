import type { Meta, StoryObj } from "@storybook/react";
import StandWithUkraine from "./StandWithUkraine";
import { url } from "../Utility";

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
  argTypes: {
    single: {
      table: {
        defaultValue: { summary: false }
      },
      description: "To be Used if the Project was created by a ukrainian dev"
    },
    team: {
      table: {
        defaultValue: { summary: false }
      },
      description: "To be Used if the Project was created by a team from ukraine"
    },
    contribution: {
      table: {
        defaultValue: { summary: false }
      },
      description: "To be Used if the Project was contributed to by ukrainians"
    },
    url: url,
  },
  parameters: {
    docs: {
      description: {
        story: 'React verions of the stand with Ukraine banners.'
      },
    }
  }
};

