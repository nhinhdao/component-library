import React from 'react';
import '../../../index.scss';
import Media from "./media";
import H from "../../1-elements/heading/heading";
import P from "../../1-elements/paragraph/paragraph";
// import Label from "../../1-elements/label/label";
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

export default {
    title:      'Blocks/Media',
    component:  Media,
    decorators: [withKnobs],
};

export const Base = () => {

    const axisOptions = ["horizontal", "vertical"];
    const axisValue = select("Axis", axisOptions, "horizontal", "Properties");

    const mediaValue = text("Media URL", "https://media0.giphy.com/media/az3XlqP9zQ9ry/giphy.gif?cid=34884493c251139916d35d72354fc4d5eb3828feb259ad30&rid=giphy.gif", "Content");
    const altValue = text("Alt Text", "A description of the media", "Content");

    const tags = [];

    if (boolean("Centered", false, "Tags")) {
        tags.push("centered");
    }

    return (
        <article>
            <Media
                axis        = { axisValue }
                media       = { mediaValue }
                altText     = { altValue }
                tags        = { tags }
            >
                <H.Three>Basic Media Object</H.Three>
                <P>The most basic media object is where some media is positioned alongside content that doesn’t wrap around said media.</P>
            </Media>
        </article>
    );
}

/*
export const User = () => {

    const axisOptions = ["horizontal", "vertical"];
    const axisValue = select("Axis", axisOptions, "horizontal", "Properties");

    const sizeOptions = ["small", "default", "large"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");

    const tags = [];

    if (boolean("Centered", false, "Tags")) {
        tags.push("centered");
    }

    return (
        <article>
            <Media
                axis        = { axisValue }
                media       = { "http://images.8tracks.com/cover/i/009/286/342/erlich-1024-6990.jpg?rect=224,0,576,576&q=98&fm=jpg&fit=max" }
                altText     = { "A photo of Erlich Bachman from HBOs hit show, Silicon Valley" }
                size        = { sizeValue }
                tags        = { tags }
            >
                <P>Erlich Bachman</P>
                <Label size="small">Founder and CEO, Aviato</Label>
            </Media>
        </article>
    );
}
*/