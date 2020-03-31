import React from 'react';
import { action } from '@storybook/addon-actions';
import '../../../index.scss';
import Button from './button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => (
  <Button onClick={action('clicked')}>Standard Button</Button>
);
