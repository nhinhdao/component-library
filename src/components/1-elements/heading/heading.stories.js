import React from 'react';
import '../../../index.scss';
import H from './heading';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Elements/Headers',
    component: H,
    decorators: [withKnobs],
};

export const Base = () => {
    const colorOptions = ["default", "primary"];
    const colorValue = select("Color", colorOptions, "default", "Properties");

    let wrapperStyle;

    const tags = [];

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
            <H.One
                color   = { colorValue }
                tags  = { tags }
            >
                Header One
            </H.One>
            <H.Two
                color   = { colorValue }
                tags  = { tags }
            >
                Header Two
            </H.Two>
            <H.Three
                color   = { colorValue }
                tags  = { tags }
            >
                Header Three
            </H.Three>
            <H.Four
                color   = { colorValue }
                tags  = { tags }
            >
                Header Four
            </H.Four>
            <H.Five
                color   = { colorValue }
                tags  = { tags }
            >
                Header Five
            </H.Five>
            <H.Six
                color   = { colorValue }
                tags  = { tags }
            >
                Header Six
            </H.Six>
        </article>
    );
}
