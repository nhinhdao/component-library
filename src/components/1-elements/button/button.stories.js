import React from 'react';
import { action } from '@storybook/addon-actions';
import '../../../index.scss';
import Button from './button';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

export default {
    title:      'Elements/Button',
    component:  Button,
    decorators: [withKnobs],
};

export const Base = () => {
    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");

    const textValue = text("Text", "Button Text", "Content");

    const tags = [];

    if (boolean("Primary", false, "Properties")) {
        tags.push("primary");
    }

    return (
        <article>
            <Button
                onClick     = { action('onClick') }
                disabled    = { boolean("Disabled", false, "Properties") }
                size        = { sizeValue }
                tags        = { tags }
            >
                { textValue }
            </Button>
        </article>
    );
}