import React from 'react';
import '../../../index.scss';
import P from './paragraph';
import H from '../heading/heading';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { buildTags } from '../../../helpers/buildTags';
import { Sizes } from '../../../constants/sizes';
import { Colors } from '../../../constants/colors';
import { typeTags } from '../../../constants/type-tags';
import { Utils } from '../../../helpers/utils';

export default {
    title: 'Elements/Paragraph',
    component: P,
    decorators: [withKnobs],
};

export const Base = () => {
    const sizeOptions = Sizes;
    const sizeValue = select("Size", sizeOptions, Sizes.base);

    let text = "Base Paragraphs inherit the font-size of the body so they can scale with the rest of the system. Contextual spacing rules allow paragraphs to change the amount of margin above them to adjust for different neighbors (A paragraph after an h1 will have more top margin than if it followed another paragraph). A max width has also been defined to aid legibility, but this can be overridden if needed.";
    if (sizeValue === "small" || sizeValue === "smaller" || sizeValue === "smallest") {
        text = "Small paragraphs can be used for asides, hints, and other secondary information. The line height remains proportional to the text size, and a little bit of letter spacing was added to aid legibility. Max width has remained the same to allow small paragraphs to align with the base width, meaning longer proportional lines."
    } else if (sizeValue === "large" || sizeValue === "larger" || sizeValue === "largest") {
        text = "Large paragraphs can be used for callouts, introductions, and other important information. The line height and max width scale proportionately with the font size."
    }

    const colorOptions = Colors;
    const colorValue = select("Color", colorOptions, Colors.neutralDark);

    const tags = [];
    buildTags(tags, typeTags);

    let wrapperStyle = {};
    if (
        Utils.inArray("inverse", tags) ||
        colorValue === Colors.neutralLighter ||
        colorValue === Colors.neutralLightest
    ) {
        wrapperStyle = {
            backgroundColor: "black"
        }
    }

    return (
        <article style={wrapperStyle}>
            <P
                color   = { colorValue }
                size    = { sizeValue }
                tags    = { tags }>
                { text }
            </P>
        </article>
    );
}

export const Flow = () => {
    return (
        <article>
            <H.One>Header One</H.One>
            <P size="large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat veritatis numquam tempore ex veniam, laudantium aliquam vero obcaecati unde quo repellat, minus odio! Ipsam hic voluptates at eos enim.</P>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat veritatis numquam tempore ex veniam, laudantium aliquam vero obcaecati unde quo repellat, minus odio! Ipsam hic voluptates at eos enim.</P>
            <H.Two>Header Two</H.Two>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat veritatis numquam tempore ex veniam, laudantium aliquam vero obcaecati unde quo repellat, minus odio! Ipsam hic voluptates at eos enim.</P>
            <h3>Header Three</h3>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat veritatis numquam tempore ex veniam, laudantium aliquam vero obcaecati unde quo repellat, minus odio! Ipsam hic voluptates at eos enim.</P>
            <h4>Header Four</h4>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat veritatis numquam tempore ex veniam, laudantium aliquam vero obcaecati unde quo repellat, minus odio! Ipsam hic voluptates at eos enim.</P>
            <h5>Header Five</h5>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat veritatis numquam tempore ex veniam, laudantium aliquam vero obcaecati unde quo repellat, minus odio! Ipsam hic voluptates at eos enim.</P>
            <h6>Header Six</h6>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat veritatis numquam tempore ex veniam, laudantium aliquam vero obcaecati unde quo repellat, minus odio! Ipsam hic voluptates at eos enim.</P>
        </article>
    );
}