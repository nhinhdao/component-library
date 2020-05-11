import React, { useState } from 'react';
import '../../../index.scss';
import Input, { inputTypes, inputTags } from "./input";
import Checkbox from "./checkbox";
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { Sizes } from '../../../constants/sizes';
import { buildTags } from '../../../helpers/buildTags';

export default {
    title:      'Elements/Input',
    component:  Input,
    decorators: [withKnobs],
};

export const Base = () => {
    const typeOptions = inputTypes;
    const typeValue = select("Type", typeOptions, inputTypes.text);

    const sizeOptions = Sizes;
    const sizeValue = select("Size", sizeOptions, Sizes.base);

    const placeholderValue = text("Placeholder", "Placeholder");

    const tags = [];
    buildTags(tags, inputTags);

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