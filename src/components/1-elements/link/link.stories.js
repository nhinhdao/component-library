import React from 'react';
import '../../../index.scss';
import A from './link';
import Card from '../card/card';
import P from '../paragraph/paragraph';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { Sizes } from '../../../constants/sizes';

export default {
    title:      'Elements/Link',
    component:  A,
    decorators: [withKnobs],
};

export const Text = () => {
    const sizeOptions = Sizes;
    const sizeValue = select("Size", sizeOptions, Sizes.base);

    const styleOptions = ["default", "undecorated", "plain"];
    const styleValue = select("Style", styleOptions, "default");

    const textValue = text("Text", "Link Text");
    const hrefValue = text("Href", "http://www.catamaran.cc");
    const labelValue = text("Aria Label", "aria-label for additional context");
    
    const targetOptions = ["_self", "_blank", "_parent", "_top"];
    const targetValue = select("Target", targetOptions, "_self");

    const tags = [];
    let wrapperStyle;

    if (boolean("caps", false)) {
        tags.push("caps");
    }

    if (boolean("center", false)) {
        tags.push("center");
    }

    if (boolean("emphasize", false)) {
        tags.push("emphasize");
    }

    if (boolean("inverse", false,)) {
        tags.push("inverse");
        wrapperStyle =  {
            backgroundColor: "black",
        }
    }

    if (boolean("muted", false)) {
        tags.push("muted");
    }

    if (styleValue !== "default") {
        tags.push(styleValue);
    }

    return (
        <article style={wrapperStyle}>
            <Card tags={["edgeless"]}>
                <A
                    href        = { hrefValue }
                    target      = { targetValue }
                    ariaLabel   = { labelValue }
                    size        = { sizeValue }
                    tags        = { tags }
                >
                    { textValue }
                </A>
            </Card>
            <Card tags={["edgeless"]}>
                <P size={sizeValue}>Lorem ipsum dolor sit amet consectetur adipisicing elit <A
                    href        = { hrefValue }
                    target      = { targetValue }
                    ariaLabel   = { labelValue }
                    tags        = { tags }
                    size        = { sizeValue }
                >
                    { textValue }
                </A>. Eius quaerat veritatis numquam tempore ex veniam, laudantium aliquam vero obcaecati unde quo repellat, minus odio! Ipsam hic voluptates at eos enim.</P>
            </Card>
        </article>
    );
}