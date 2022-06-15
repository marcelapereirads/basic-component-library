// import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Story, Meta } from '@storybook/angular/types-6-0';
// import { moduleMetadata } from '@storybook/angular';

// import { BaseErrorModule } from '../lib/base-error/base-error.module';
// import { BaseInputComponent } from '../lib/base-input/base-input.directive';

// export default {
//   title: 'Components/Input',
//   component: BaseInputComponent,
//   decorators: [
//     moduleMetadata({
//       imports: [FormsModule, ReactiveFormsModule, BaseErrorModule],
//     }),
//   ],
// } as Meta;

// const Template: Story<BaseInputComponent> = (args: BaseInputComponent) => ({
//   props: args,
// });

// export const Enabled = Template.bind({});
// Enabled.args = {
//   label: 'Input',
//   id: 'enabled-input',
//   control: new FormControl(),
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   label: 'Input',
//   id: 'disabled-input',
//   disabled: true,
//   control: new FormControl(),
// };

// export const Masked = Template.bind({});
// Masked.args = {
//   label: 'Input with cell mask',
//   id: 'masked-input',
//   mask: '(00) 00000-0000',
//   control: new FormControl(),
// };

// export const Error = Template.bind({});
// Error.args = {
//   label: 'Input',
//   id: 'error-input',
//   errors: ['Please fill in the field'],
//   control: new FormControl(null, [Validators.required]),
// };
