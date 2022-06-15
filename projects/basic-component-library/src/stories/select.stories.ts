import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { BaseSelectComponent } from '../lib/base-select/base-select.component';
import { BaseErrorModule } from '../lib/base-error/base-error.module';

export default {
  title: 'Components/Select',
  component: BaseSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, BaseErrorModule],
    }),
  ],
} as Meta;

const Template: Story<BaseSelectComponent> = (args: BaseSelectComponent) => ({
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
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Select',
  id: 'disabled-select',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Select',
  id: 'error-input',
  options,
  error: 'Please fill in the field',
};
