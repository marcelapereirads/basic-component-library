import { Story, Meta } from '@storybook/angular/types-6-0';

import { BaseInputDirective } from '../lib/base-input/base-input.directive';

export default {
  title: 'Directives/Input',
  component: BaseInputDirective,
} as Meta<BaseInputDirective>;

const Template: Story<BaseInputDirective> = (args: BaseInputDirective) => ({
  props: args,
  template: `<input base-input [label]="label" [disable]="disable" [errorMessage]="errorMessage" />`,
});

export const Enabled = Template.bind({});
Enabled.args = {
  label: 'Enabled input',
  id: 'enabled-input',
  disable: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled input',
  id: 'disabled-input',
  disable: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Input with an error',
  id: 'error-input',
  errorMessage: 'Please fill in the field',
};
