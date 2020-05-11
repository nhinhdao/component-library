import React from 'react';
import '../../../index.scss';
import Breadcrumbs from "./breadcrumbs";
import { withKnobs, select } from '@storybook/addon-knobs';
import { Sizes } from '../../../constants/sizes';

export default {
    title:      'Blocks/Breadcrumbs',
    component:  Breadcrumbs,
    decorators: [withKnobs],
};

export const Base = () => {

    const sizeOptions = Sizes;
    const sizeValue = select("Size", sizeOptions, Sizes.base);

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