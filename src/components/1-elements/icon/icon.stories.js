import React from 'react';
import '../../../index.scss';
import Icon from './icon';
import List from '../list/list';
import Label from '../label/label';
import iconSet from './icon-set';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
    title: 'Elements/Icon',
    component: Icon,
    decorators: [withKnobs],
};

export const Base = () => {
    const sizeOptions = ["default", "large", "xlarge", "xxlarge"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");

    const colorOptions = ["brand-primary", "neutral-lightest", "neutral-light", "neutral", "neutral-dark", "neutral-darkest"];
    const colorValue = select("Color", colorOptions, "neutral-darkest", "Properties");

    let wrapperStyle;
    if (colorValue === "neutral-lightest") {
        wrapperStyle = {
            backgroundColor: "#000",
        }
    }


    const tags = [];

    const icons = [];
    for (var icon in iconSet) {
        if (Object.prototype.hasOwnProperty.call(iconSet, icon)) {
            icons.push(icon);
        }
    }

    return (
        <article style={wrapperStyle}>
            <List>
            {
                icons.map((icon, key) => {
                    return (
                        <li>
                            <Icon
                                color   = { colorValue }
                                icon    = { icon }
                                key     = { "icon-" + key }
                                size    = { sizeValue }
                                tags    = { tags }
                            />
                            <Label
                                tags = { ["centered"] }
                            >{ icon }</Label>
                        </li>
                    );
                })
            }
            </List>
        </article>
    );
}