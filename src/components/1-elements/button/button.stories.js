import React from 'react';
import { action } from '@storybook/addon-actions';
import '../../../index.scss';
import Button from './button';
import Toggle from './toggle';
import Card from '../card/card';
import { iconSet } from '../icon/icon-set';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { Sizes } from '../../../constants/sizes';

export default {
    title:      'Elements/Button',
    component:  Button,
    decorators: [withKnobs],
    parameters: {
        componentSubtitle: 'Standard clickable control',
      },
};

const iconOptions = [];
for (var icon in iconSet) {
    if (Object.prototype.hasOwnProperty.call(iconSet, icon)) {
        iconOptions.push(icon);
    }
}

export const Base = () => {
    const sizeOptions = Sizes;
    const sizeValue = select("Size", sizeOptions, Sizes.base);
    

    const textValue = text("Text", "Button Text");

    let iconValue = select("Icon", iconOptions, "none");

    if (iconValue === "none") {
        iconValue = "";
    }


    const tags = [];

    if (boolean("Primary", false)) {
        tags.push("primary");
    }

    return (
        <article>
            <Button
                onClick     = { action('onClick') }
                disabled    = { boolean("Disabled", false) }
                size        = { sizeValue }
                tags        = { tags }
                icon        = { iconValue }
            >
                { textValue }
            </Button>
        </article>
    );
}


export const ToggleButton = () => {
    const sizeOptions = Sizes;
    const sizeValue = select("Size", sizeOptions, Sizes.base);

    const onLabelValue  = text("On Label", "On");
    let onIconValue   = select("On Icon", iconOptions, "none");
    const offLabelValue = text("Off Label", "Off");
    let offIconValue   = select("Off Icon", iconOptions, "none");

    const disabledValue = boolean("Disabled", false);

    if (onIconValue === "none") {
        onIconValue = null;
    }

    if (offIconValue === "none") {
        offIconValue = null;
    }


    const tags = [];

    return (
        <article>
            <Card tags={["edgeless"]}>
                <Toggle
                    checked     = { true }
                    disabled    = { disabledValue }
                    offIcon     = { offIconValue }
                    offLabel    = { offLabelValue }
                    onIcon      = { onIconValue }
                    onLabel     = { onLabelValue }
                    size        = { sizeValue }
                    tags        = { tags }
                />
            </Card>
            <Card tags={["edgeless"]}>
                <Toggle
                    checked     = { false }
                    disabled    = { disabledValue }
                    offIcon     = { offIconValue }
                    offLabel    = { offLabelValue }
                    onIcon      = { onIconValue }
                    onLabel     = { onLabelValue }
                    size        = { sizeValue }
                    tags        = { tags }
                />
            </Card>
        </article>
    );
}