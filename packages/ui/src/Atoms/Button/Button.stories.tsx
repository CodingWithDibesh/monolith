import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
    args: {
        label: 'Button',
    },
};
