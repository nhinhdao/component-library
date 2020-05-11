import React from 'react';
import '../../../index.scss';
import Icon from './icon';
import List from '../list/list';
import Label from '../label/label';
import { iconSet } from './icon-set';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Colors } from '../../../constants/colors';
import { Sizes } from '../../../constants/sizes';

export default {
    title: 'Elements/Icon',
    component: Icon,
    decorators: [withKnobs],
};

export const Base = () => {
    const sizeOptions = Sizes;
    const sizeValue = select("Size", sizeOptions, Sizes.base);

    const colorOptions = Colors;
    const colorValue = select("Color", colorOptions, Colors.neutralDarkest);

    let wrapperStyle;
    if (colorValue === "neutral-lightest") {
        wrapperStyle = {
            backgroundColor: "#000",
        }
    }

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