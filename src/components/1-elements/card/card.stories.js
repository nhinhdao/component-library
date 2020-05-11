import React from 'react';
import '../../../index.scss';
import Card, { cardTags, cardPadding } from './card';
import P from '../paragraph/paragraph';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { buildTags } from '../../../helpers/buildTags';

export default {
    title: 'Elements/Card',
    component: Card,
    decorators: [withKnobs],
};

export const Base = () => {
    const paddingOptions = cardPadding;
    const paddingValue = select("Padding", paddingOptions, "default");

    const tags = [];
    buildTags(tags, cardTags);

    return (
        <article className={boolean("Background", false) ? "bg-neutral-lighter" : ""}>
            <Card
                padding = { paddingValue }
                tags    = { tags }>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
            </Card>
        </article>
    );
}