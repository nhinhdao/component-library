import React from 'react'
import './card.scss';

/* Interface
    className:  string,
    color:      string, from $Colors
    padding:    string, from $Sizes
    tags:       array of strings, from @typeTags
*/

const Card = class extends React.Component {
    render() {
        let className = "card";

        if (this.props.padding) {
            className += " padding-" + this.props.padding;
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
            <div className={className}>
                { this.props.children }
            </div>
        )
    }
}

export default Card
