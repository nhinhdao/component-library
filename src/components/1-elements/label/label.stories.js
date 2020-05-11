import React from 'react';
import '../../../index.scss';
import Label from './label';
import P from '../paragraph/paragraph';
import { withKnobs, select } from '@storybook/addon-knobs';
import { buildTags } from '../../../helpers/buildTags';
import { Utils } from '../../../helpers/utils';
import { typeTags } from '../../../constants/type-tags';
import { Colors } from '../../../constants/colors';

export default {
    title: 'Elements/Label',
    component: Label,
    decorators: [withKnobs],
};

export const Base = () => {
    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default");

    let text = "This is a label";

    const colorOptions = Colors;
    const colorValue = select("Color", colorOptions, colors.neutralDark);

    
    const tags = [];
    buildTags(tags, typeTags);

    let wrapperStyle = {};
    if (
        Utils.inArray("inverse", tags) ||
        colorValue === colors.neutralLighter ||
        colorValue === colors.neutralLightest
    ) {
        console.log("INVERSE");
        wrapperStyle = {
            backgroundColor: "black"
        }
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