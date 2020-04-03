import React from 'react';
import '../../../index.scss';
import Hook from "./hook";
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
    title:      'Blocks/Hook',
    component:  Hook,
    decorators: [withKnobs],
};

export const Base = () => {
    
    const axisOptions = ["horizontal", "vertical"];
    const axisValue = select("Axis", axisOptions, "horizontal", "Properties");

    /*
    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");
    

    const placeholderValue = text("Placeholder", "enter your email", "Content");
    const buttonValue = text("Button", "Subscribe", "Content");

    */

    return (
        <article>
            <Hook
                axis = { axisValue }
            />
        </article>
    );
}