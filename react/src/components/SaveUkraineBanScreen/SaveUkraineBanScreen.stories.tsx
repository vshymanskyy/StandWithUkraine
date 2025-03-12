import type { Meta, StoryObj } from "@storybook/react";
import SaveUkraineBanScreen, { defaultProps } from "./SaveUkraineBanScreen";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof SaveUkraineBanScreen> = {
  title: "Components/SaveUkraineBanScreen",
  component: SaveUkraineBanScreen,
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof SaveUkraineBanScreen>;


export const banScreen: Story = {
  args: {
    forceShow: true,
  },
  argTypes: {
    text: {
      table: {
        defaultValue: {summary: "<>Остановить войну с <b>Украиной</b></>"}
      },
      description: "The text to display to blocked visitors.",
    },
    hideBlood: {
      table: {
        defaultValue: { summary: defaultProps.hideBlood }
      },
      description: "Hide blood splatter"
    },
    isGraphicIncluded: {
      table: {
        defaultValue: { summary: defaultProps.isGraphicIncluded },
      },
      description: "What graphic to show as the background of the bann screen. Nothing on false"
    },
    countries: {
      table: {
        defaultValue: { summary: defaultProps.countries },
      },
      description: "A list of language codes to ban."
    },
    isCancelable: {
      table: {
        defaultValue: { summary: defaultProps.isCancelable }
      },
      description: "shows a cancel button if true"
    },
    forceShow: {
      table: {
        defaultValue: { summary: defaultProps.forceShow }
      },
      description: "DEBUG ONLY, show the ban screen no matter what."
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Show a ban screen for all visitors form Russia or Belarus.'
      },
    }
  }
};

