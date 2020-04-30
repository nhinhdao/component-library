import React from 'react';
import '../../../index.scss';
import Breadcrumbs from "./breadcrumbs";
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
    title:      'Blocks/Breadcrumbs',
    component:  Breadcrumbs,
    decorators: [withKnobs],
};

export const Base = () => {

    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");

    const items = [{
        href:   "http://google.com",
        name:  "Home",
    }, {
        href:   "http://google.com",
        name:  "About",
    }, {
        href:   "http://google.com",
        name:  "Team",
    }];

    return (
        <article>
            <Breadcrumbs
                size        = { sizeValue }
                items       = { items }
            />
        </article>
    );
}