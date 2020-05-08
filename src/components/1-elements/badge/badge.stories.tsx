import React from 'react';
import '../../../index.scss';
import Badge, { BadgeVariants, BadgeSizes } from './badge';
import { withKnobs, select, text } from '@storybook/addon-knobs';

export default {
    title: 'Elements/Badge',
    component: Badge,
    decorators: [withKnobs],
};

export const Base = () => {
    const sizeValue = select("Size", BadgeSizes, BadgeSizes.Default);
    const variantValue = select("Variant", BadgeVariants, BadgeVariants.Primary);

    const textValue = text("Text", "Badge");

    let wrapperStyle;

    const tags: string[] = [];

    return (
        <article style={wrapperStyle}>
            <Badge
                variant={variantValue}
                size={sizeValue}
                tags={tags}>
                {textValue}
            </Badge>
        </article>
    );
}