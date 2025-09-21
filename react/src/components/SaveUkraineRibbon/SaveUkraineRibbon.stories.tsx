import type { Meta, StoryObj } from "@storybook/react";
import SaveUkraineRibbon, { SaveUkraineRibbonProps, defaultProps } from "./SaveUkraineRibbon";
import { url } from "../Utility";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof SaveUkraineRibbon> = {
  title: "Components/SaveUkraineRibbon",
  component: SaveUkraineRibbon,
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof SaveUkraineRibbon>;


export const ribbon: Story = {
  args: {
  },
  argTypes: {
    position :{
      table: {
        defaultValue: { summary: defaultProps.position },
      },
      description:  'The location of the Ribbon',
    },
    url: url,
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

