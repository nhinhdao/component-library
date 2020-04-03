import React from 'react';
import '../../../index.scss';
import A from './link';
import P from '../paragraph/paragraph';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

export default {
    title:      'Elements/Link',
    component:  A,
    decorators: [withKnobs],
};

export const Text = () => {
    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");

    const styleOptions = ["default", "undecorated", "plain"];
    const styleValue = select("Style", styleOptions, "default", "Properties");

    const textValue = text("Text", "Link Text", "Content");
    const hrefValue = text("Href", "http://www.catamaran.cc", "Content");
    const labelValue = text("Aria Label", "aria-label for additional context", "Content");
    
    const targetOptions = ["_self", "_blank", "_parent", "_top"];
    const targetValue = select("Target", targetOptions, "_self", "Properties");

    const tags = [];
    let wrapperStyle;

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

    if (styleValue !== "default") {
        tags.push(styleValue);
    }

    return (
        <article style={wrapperStyle}>
            <A
                href        = { hrefValue }
                target      = { targetValue }
                ariaLabel   = { labelValue }
                size        = { sizeValue }
                tags        = { tags }
            >
                { textValue }
            </A>
        </article>
    );
}


export const Inline = () => {

    const textValue = text("Text", "Link Text", "Content");
    const hrefValue = text("Href", "http://www.catamaran.cc", "Content");
    const labelValue = text("Aria Label", "aria-label for additional context", "Content");
    
    const targetOptions = ["_self", "_blank", "_parent", "_top"];
    const targetValue = select("Target", targetOptions, "_self", "Properties");

    const styleOptions = ["default", "undecorated", "plain"];
    const styleValue = select("Style", styleOptions, "default", "Properties");

    const tags = [];
    let wrapperStyle;

    if (boolean("caps", false, "Tags")) {
        tags.push("caps");
    }

    if (boolean("emphasize", false, "Tags")) {
        tags.push("emphasize");
    }

    if (boolean("muted", false, "Tags")) {
        tags.push("muted");
    }

    if (styleValue !== "default") {
        tags.push(styleValue);
    }



    return (
        <article style={wrapperStyle}>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit <A
                href        = { hrefValue }
                target      = { targetValue }
                ariaLabel   = { labelValue }
                tags        = { tags }
            >
                { textValue }
            </A>. Eius quaerat veritatis numquam tempore ex veniam, laudantium aliquam vero obcaecati unde quo repellat, minus odio! Ipsam hic voluptates at eos enim.</P>
        </article>
    );
}