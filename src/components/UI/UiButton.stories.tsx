import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UiButton from "./UiButton";

export default {
  title: 'Ui-kit/UiButton',
  component: UiButton
} as ComponentMeta<typeof UiButton>


const Template: ComponentStory<typeof UiButton> = (args) => <UiButton {...args} />;

const props = {
  setCurrentPage: () => console.log('Hello'),
  text: 'Hello',
  setDisable: true,
  theme: 'dark',
}


export const Dark = Template.bind({});
Dark.args = {
  ...props,
  theme: 'dark'
};

export const Light = Template.bind({});
Light.args = {
  ...props,
  theme: 'light'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...props,
  setDisable: false
};
