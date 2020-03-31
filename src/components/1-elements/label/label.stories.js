import React from 'react';
import '../../../index.scss';
import Label from './label';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Label',
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

    const tokens = [];

    if (boolean("bold", false, "Tokens")) {
        tokens.push("bold");
    }

    if (boolean("caps", false, "Tokens")) {
        tokens.push("caps");
    }

    if (boolean("center", false, "Tokens")) {
        tokens.push("center");
    }

    if (boolean("emphasize", false, "Tokens")) {
        tokens.push("emphasize");
    }

    if (boolean("inverse", false, "Tokens")) {
        tokens.push("inverse");
        wrapperStyle =  {
            backgroundColor: "black",
        }
    }

    if (boolean("muted", false, "Tokens")) {
        tokens.push("muted");
    }

    return (
        <article style={wrapperStyle}>
            <Label
                color   = { colorValue }
                size    = { sizeValue }
                tokens  = { tokens }>
                { text }
            </Label>
        </article>
    );
}