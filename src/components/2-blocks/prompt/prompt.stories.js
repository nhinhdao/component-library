import React from 'react';
import '../../../index.scss';
import Prompt from "./prompt";
import Hook from "../hook/hook";
import { withKnobs, select, text } from '@storybook/addon-knobs';

export default {
    title:      'Blocks/Prompt',
    component:  Prompt,
    decorators: [withKnobs],
};

export const Base = () => {
    const axisOptions = ["horizontal", "vertical"];
    const axisValue = select("Axis", axisOptions, "horizontal", "Properties");

    const hookAxisOptions = ["horizontal", "vertical"];
    const hookAxisValue = select("Button Axis", hookAxisOptions, "horizontal", "Properties");

    const headingValue = text("Heading", "Get their attention", "Content");
    const bodyValue = text("Body", "Then draw them in and convince them to click that button.", "Content");

    return (
        <article>
            <Prompt
                axis        = { axisValue }
                hookAxis    = { hookAxisValue }
                heading     = { headingValue }
                body        = { bodyValue }
            >
                <Hook axis={hookAxisValue} />
            </Prompt>
        </article>
    );
}