import React from 'react'
import './paragraph.scss';
import { Sizes } from '../../../constants/sizes';
import { Colors } from '../../../constants/colors';
import { typeTags } from '../../../constants/type-tags';

/* Interface
    className:  string,
    size:       string, from $Sizes
    color:      string, from $Colors
    tags:       array of strings, from @typeTags
*/

export interface ParagraphProps {
    className?: string,
    size?:      keyof typeof Sizes,
    color?:     keyof typeof Colors,
    tags?:      Array<keyof typeof typeTags>
}

const P = class extends React.Component<ParagraphProps, any> {
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
            <p className={className}>
                { this.props.children }
            </p>
        )
    }
}

export default P
