import React from 'react';
import '../../../index.scss';
import List from './list';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Elements/List',
    component: List,
    decorators: [withKnobs],
};

export const Base = () => {
    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");

    const inlineValue = boolean("Inline", false, "Properties");
    const orderedValue = boolean("Ordered", false, "Properties");
    const decoratedValue = boolean("Decorated", false, "Properties");

    const tags = [];

    if (inlineValue) {
        tags.push("inline");
    } else if (decoratedValue) {
        tags.push("decorated");
    }

    const listItems = [
        "list item A",
        "list item B",
        "list item C",
        "list item D",
    ];

    return (
        <article>
            <List
                decorated   = { decoratedValue}
                ordered     = { orderedValue }
                size        = { sizeValue }
                tags        = { tags }
            >{
                listItems.map((item, key) => {
                    return (
                        <li key={"listItem-" + key}>{ item }</li>
                    );
                })
            }</List>
        </article>
    );
}