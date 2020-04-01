import React from 'react';
import { action } from '@storybook/addon-actions';
import '../../../index.scss';
import Button from './button';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
    title:      'Button',
    component:  Button,
    decorators: [withKnobs],
};

export const Text = () => {
    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default");

    const tags = [];

    if (boolean("Primary", false,)) {
        tags.push("primary");
    }

    return (
        <article>
            <Button
                onClick     = { action('onClick') }
                disabled    = { boolean("Disabled", false) }
                size        = { sizeValue }
                tags        = { tags }
            >
                Button Text
            </Button>
        </article>
    );
}