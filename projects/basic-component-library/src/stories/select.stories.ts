import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { SelectComponent } from '../lib/select/select.component';
import { ErrorModule } from '../lib/error/error.module';

export default {
    title: 'Components/Select',
    component: SelectComponent,
    decorators: [
        moduleMetadata({
            imports: [FormsModule, ReactiveFormsModule, ErrorModule],
        }),
    ],
} as Meta;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
    props: args,
});

const options = [
    {
        value: 'option1',
        viewValue: 'Option 1',
    },
    {
        value: 'option2',
        viewValue: 'Option 2',
    },
];

export const Enabled = Template.bind({});
Enabled.args = {
    label: 'Select',
    id: 'enabled-select',
    options,
    control: new FormControl(),
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Select',
    id: 'disabled-select',
    disabled: true,
    control: new FormControl(),
};

export const Error = Template.bind({});
Error.args = {
    label: 'Select',
    id: 'error-input',
    options,
    error: 'Please fill in the field',
    control: new FormControl(null, [Validators.required]),
};
