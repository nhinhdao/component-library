import React from 'react';
import '../../../index.scss';
import Card from './card';
import P from '../paragraph/paragraph';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Elements/Card',
    component: Card,
    decorators: [withKnobs],
};

export const Base = () => {
    const paddingOptions = ["default", "small", "large"];
    const paddingValue = select("Padding", paddingOptions, "default", "Properties");

    const tags = [];

    if (boolean("Edgeless", false, "Properties")) {
        tags.push("edgeless");
    }

    return (
        <article className={boolean("Background", false, "Properties") ? "bg-neutral-lighter" : ""}>
            <Card
                padding = { paddingValue }
                tags    = { tags }>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
            </Card>
        </article>
    );
}