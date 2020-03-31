import React from 'react';
import '../../../index.scss';
import H from './header';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Headers',
    component: H,
    decorators: [withKnobs],
};

export const Base = () => {
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
            <H.One
                color   = { colorValue }
                tokens  = { tokens }
            >
                Header One
            </H.One>
            <H.Two
                color   = { colorValue }
                tokens  = { tokens }
            >
                Header Two
            </H.Two>
            <H.Three
                color   = { colorValue }
                tokens  = { tokens }
            >
                Header Three
            </H.Three>
            <H.Four
                color   = { colorValue }
                tokens  = { tokens }
            >
                Header Four
            </H.Four>
            <H.Five
                color   = { colorValue }
                tokens  = { tokens }
            >
                Header Five
            </H.Five>
            <H.Six
                color   = { colorValue }
                tokens  = { tokens }
            >
                Header Six
            </H.Six>
        </article>
    );
}
