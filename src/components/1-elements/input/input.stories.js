import React, { useState } from 'react';
import '../../../index.scss';
import Input from "./input";
import Checkbox from "./checkbox";
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

export default {
    title:      'Elements/Input',
    component:  Input,
    decorators: [withKnobs],
};

export const Base = () => {
    const typeOptions = ["checkbox", "color", "date", "datetime-local", "email", "file", "number", "password", "radio", "range", "text", "time"];
    const typeValue = select("Type", typeOptions, "text", "Properties");

    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");

    const placeholderValue = text("Placeholder", "Placeholder", "Content");

    const tags = [];

    if (boolean("fullWidth", false, "Tags")) {
        tags.push("fullWidth");
    }

    return (
        <article>
            <Input
                disabled        = { boolean("Disabled", false) }
                placeholder     = { placeholderValue }
                size            = { sizeValue }
                tags            = { tags }
                type            = { typeValue }
            />
        </article>
    );
}

export const CheckboxInput = () => {
    const [ checked, setChecked ] = useState(false);
    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default");

    const tags = [];

    return (
        <article>
            <Checkbox
                disabled        = { boolean("Disabled", false) }
                checked         = { checked }
                size            = { sizeValue }
                onChange        = { e => setChecked(e.target.checked)}
                tags            = { tags }
            />
        </article>
    );
}