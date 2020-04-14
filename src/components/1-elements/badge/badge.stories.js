import React from 'react';
import '../../../index.scss';
import Badge from './badge';
import { withKnobs, select, text } from '@storybook/addon-knobs';

export default {
    title: 'Elements/Badge',
    component: Badge,
    decorators: [withKnobs],
};

export const Base = () => {
    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default");

    const variantOptions = ["primary", "secondary", "danger", "warning", "success"];
    const variantValue = select("Variant", variantOptions, "primary");

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