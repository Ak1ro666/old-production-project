import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Code } from './Code';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Normal: Story = {
  args: {
    text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
  },
};

export const Dark: Story = {
  args: {
    text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  args: {
    text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
