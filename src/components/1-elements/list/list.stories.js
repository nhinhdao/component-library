import React from 'react';
import '../../../index.scss';
import List from './list';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Sizes } from '../../../constants/sizes';

export default {
    title: 'Elements/List',
    component: List,
    decorators: [withKnobs],
};

export const Base = () => {
    const sizeOptions = Sizes;
    const sizeValue = select("Size", sizeOptions, Sizes.base);

    const inlineValue = boolean("Inline", false);
    const orderedValue = boolean("Ordered", false);
    const undecoratedValue = boolean("Undecorated", false);

    const tags = [];

    if (inlineValue) {
        tags.push("inline");
    } else if (undecoratedValue) {
        tags.push("undecorated");
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
                decorated   = { undecoratedValue}
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