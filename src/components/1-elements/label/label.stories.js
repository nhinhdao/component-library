import React from 'react';
import '../../../index.scss';
import Label from './label';
import P from '../paragraph/paragraph';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Elements/Label',
    component: Label,
    decorators: [withKnobs],
};

export const Base = () => {
    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");

    let text = "This is a label";

    const colorOptions = ["default", "primary"];
    const colorValue = select("Color", colorOptions, "default", "Properties");

    let wrapperStyle;

    const tags = [];

    if (boolean("bold", false, "Tags")) {
        tags.push("bold");
    }

    if (boolean("caps", false, "Tags")) {
        tags.push("caps");
    }

    if (boolean("center", false, "Tags")) {
        tags.push("center");
    }

    if (boolean("emphasize", false, "Tags")) {
        tags.push("emphasize");
    }

    if (boolean("inverse", false, "Tags")) {
        tags.push("inverse");
        wrapperStyle =  {
            backgroundColor: "black",
        }
    }

    if (boolean("muted", false, "Tags")) {
        tags.push("muted");
    }

    return (
        <article style={wrapperStyle}>
            <Label
                color   = { colorValue }
                size    = { sizeValue }
                tags    = { tags }>
                { text }
            </Label>
        </article>
    );
}

export const Flow = () => {


    return (
        <article>
            <Label>This is a label</Label>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi nunc, eleifend at condimentum non, interdum semper arcu. Quisque lectus augue, scelerisque vel sollicitudin eget, pretium et odio. Aliquam accumsan lectus quis risus egestas, id imperdiet libero consectetur.</P>
            <Label>This is a label</Label>
        </article>
    );
}