import React from 'react'
import './label.scss';
import { typeTags } from '../../../constants/type-tags';
import { Colors } from '../../../constants/colors';
import { Sizes } from '../../../constants/sizes';

export interface LabelProps {
    className?: string,
    color?:     keyof typeof Colors,
    size?:      keyof typeof Sizes,
    tags?:      Array<keyof typeof typeTags>,
}

const Label = class extends React.Component<LabelProps, any> {
    render() {
        let className = "";

        if (this.props.size) {
            className += " -" + this.props.size;
        }

        if (this.props.color) {
            className += " color-" + this.props.color;
        }

        if (Array.isArray(this.props.tags)) {
            for (let i = 0; i < this.props.tags.length; i++) {
                className += " -" + this.props.tags[i].replace(" ", "");
            }
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return (
            <label className={className}>
                { this.props.children }
            </label>
        )
    }
}

export default Label
