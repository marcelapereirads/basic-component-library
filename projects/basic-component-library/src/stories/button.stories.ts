import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { BaseButtonComponent } from '../lib/base-button/base-button.component';

export default {
    title: 'Components/Button',
    component: BaseButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [],
        }),
    ],
} as Meta;

const Template: Story<BaseButtonComponent> = (args: BaseButtonComponent) => ({
    props: args,
    template: `
        <base-button [type]="type" [id]="id" [action]="action">Ok</base-button>
    `,
});

const action = () => alert('clicked');

export const Primary = Template.bind({});
Primary.args = {
    id: 'primary-button',
    type: 'primary',
    action,
};

export const Secondary = Template.bind({});
Secondary.args = {
    id: 'secondary-button',
    type: 'secondary',
    action,
};

export const Disabled = Template.bind({});
Disabled.args = {
    id: 'disabled-button',
    type: 'primary',
    disabled: true,
    action,
};
