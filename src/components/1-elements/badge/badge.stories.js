import React from 'react';
import '../../../index.scss';
import Badge, { BadgeVariants } from './badge';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { Sizes } from '../../../constants/sizes';

export default {
    title: 'Elements/Badge',
    component: Badge,
    decorators: [withKnobs],
};

export const Base = () => {
    const sizeOptions = Sizes;
    const sizeValue = select("Size", sizeOptions, Sizes.base);

    const variantOptions = BadgeVariants;
    const variantValue = select("Variant", variantOptions, BadgeVariants.primary);

    const textValue = text("Text", "Badge");

    let wrapperStyle;

    const tags = [];

    return (
        <article style={wrapperStyle}>
            <Badge
                variant = { variantValue }
                size    = { sizeValue }
                tags    = { tags }>
                { textValue }
            </Badge>
        </article>
    );
}