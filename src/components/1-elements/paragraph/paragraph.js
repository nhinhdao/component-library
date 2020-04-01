import React from 'react'
import './paragraph.scss';

/* Interface
    className:  string,
    size:       string, from $Sizes
    color:      string, from $Colors
    tags:       array of strings, from @typeTags
*/

const P = class extends React.Component {
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
