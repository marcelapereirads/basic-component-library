import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { NgxMaskModule } from 'ngx-mask';

import { ErrorModule } from '../lib/error/error.module';
import { InputComponent } from '../lib/input/input.component';

export default {
    title: 'Components/Input',
    component: InputComponent,
    decorators: [
        moduleMetadata({
            imports: [NgxMaskModule.forRoot(), FormsModule, ReactiveFormsModule, ErrorModule],
        }),
    ],
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
    props: args,
});

export const Enabled = Template.bind({});
Enabled.args = {
    label: 'Input',
    id: 'enabled-input',
    control: new FormControl(),
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Input',
    id: 'disabled-input',
    disabled: true,
    control: new FormControl(),
};

export const Masked = Template.bind({});
Masked.args = {
    label: 'Input with cell mask',
    id: 'masked-input',
    mask: '(00) 00000-0000',
    control: new FormControl(),
};

export const Error = Template.bind({});
Error.args = {
    label: 'Input',
    id: 'error-input',
    errors: ['Please fill in the field'],
    control: new FormControl(null, [Validators.required]),
};
