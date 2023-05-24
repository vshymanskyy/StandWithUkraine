import type { Meta, StoryObj } from "@storybook/react";
import SaveUkraineBanScreen, { SaveUkraineBanScreenProps, defaultProps } from "./SaveUkraineBanScreen";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof SaveUkraineBanScreen> = {
  title: "Components/SaveUkraineBanScreen",
  component: SaveUkraineBanScreen,
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof SaveUkraineBanScreen>;


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
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A Ribbon on the corner of the page show support for Ukraine.'
      },
    }
  }
};

