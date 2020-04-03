import React from 'react';
import '../../../index.scss';
import Field from "./field";
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

export default {
    title:      'Blocks/Field',
    component:  Field,
    decorators: [withKnobs],
};

export const Base = () => {
    const typeOptions = ["color", "date", "datetime-local", "email", "file", "number", "password", "range", "text", "time"];
    const typeValue = select("Type", typeOptions, "text", "Properties");

    const axisOptions = ["horizontal", "vertical"];
    const axisValue = select("Axis", axisOptions, "vertical", "Properties");

    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");

    const disabledValue = boolean("Disabled", false, "Properties");
    const invalidValue = boolean("Invalid", false, "Properties");

    const idValue = text("ID", "field-id", "Properties");

    const labelValue = text("Label", "Label", "Content");
    const placeholderValue = text("Placeholder", "Placeholder", "Content");
    const messageValue = text("Message", "Hint text or validation messages", "Content");

    const tags = [];

    /*
    if (boolean("expand", false, "Tags")) {
        tags.push("expand");
    }
    */

    return (
        <article>
            <Field
                axis        = { axisValue }
                disabled    = { disabledValue}
                id          = { idValue }
                invalid     = { invalidValue }
                label       = { labelValue }
                message     = { messageValue }
                placeholder = { placeholderValue}
                size        = { sizeValue }
                tags        = { tags }
                type        = { typeValue }
            />
        </article>
    );
}