import React from 'react'
import './card.scss';

/* Interface
    className:  string,
    color:      string, from $Colors
    padding:    string, from $Sizes
    tags:       array of strings, from @typeTags
*/

export interface CardProps {
    className?: string,
    tags?:      Array<keyof typeof cardTags>,
    padding?:   keyof typeof cardPadding,
}

export const cardTags = {
    edgeless:   "edgelesss",
    inline:     "inline",
    center:     "center",
}

export const cardPadding = {
    small: "small",
    large: "large",
}


const Card = class extends React.Component<CardProps, any> {
    render() {
        let className = "card";

        if (this.props.padding) {
            className += " padding-" + this.props.padding;
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
            <div className={className}>
                { this.props.children }
            </div>
        )
    }
}

export default Card
