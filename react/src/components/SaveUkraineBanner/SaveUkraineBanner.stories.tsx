import type { Meta, StoryObj } from "@storybook/react";
import SaveUkraineBanner, { SaveUkraineBannerProps, defaultProps } from "./SaveUkraineBanner";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof SaveUkraineBanner> = {
  title: "Components/SaveUkraineBanner",
  component: SaveUkraineBanner,
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof SaveUkraineBanner>;


export const banner: Story = {
  args: {
  },
  argTypes: {
    position :{
      table: {
        defaultValue: { summary: defaultProps.position }
      },
      description:  'The location of the Ribbon',
    },
    url :{
      table: {
        defaultValue: { summary: defaultProps.url }
      },
      description:  'The Url to redierect to',
    },
    noRedirect :{
      table: {
        defaultValue: { summary: defaultProps.noRedirect }
      },
      description:  'Do not redirect on click',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'A Ribbon on the corner of the page show support for Ukraine.'
      },
    }
  }
};

