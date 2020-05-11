import React from 'react';
import '../../../index.scss';
import H from './heading';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Colors } from '../../../constants/colors';
import { buildTags } from '../../../helpers/buildTags';
import { typeTags } from '../../../constants/type-tags';

export default {
    title: 'Elements/Headers',
    component: H,
    decorators: [withKnobs],
};

export const Base = () => {
    const colorOptions = Colors;
    const colorValue = select("Color", colorOptions, Colors.neutralDarkest);

    let wrapperStyle;

    const tags = [];
    buildTags(tags, typeTags);

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
