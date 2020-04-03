import React from 'react';
import '../../../index.scss';
import Nav from "./nav";
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
    title:      'Blocks/Nav',
    component:  Nav,
    decorators: [withKnobs],
};

export const Base = () => {

    const axisOptions = ["horizontal", "vertical"];
    const axisValue = select("Axis", axisOptions, "horizontal", "Properties");

    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");

    const items = [{
        active: true,
        href:   "http://google.com",
        label:  "Home",
    }, {
        href:   "http://google.com",
        label:  "About",
    }, {
        href:   "http://google.com",
        label:  "Contact",
    }];

    return (
        <article>
            <Nav
                axis        = { axisValue }
                size        = { sizeValue }
                items       = { items }
            />
        </article>
    );
}