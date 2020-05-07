import React from 'react'
import './label.scss';
import { typeTags } from '../../../constants/type-tags';

/* Interface
    className:  string,
    color:      string, from $Colors
    size:       string, from $Sizes
    tags:     array of strings, from @typeTags
*/

export interface LabelProps {
    className:  string,
    color:      string,
    size:       string,
    tags:       Array<keyof typeof typeTags>,
}

const Label = class extends React.Component<LabelProps, null> {
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
