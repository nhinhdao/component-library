import React from 'react'
import './badge.scss';

/* Interface
    className:  string,
    size:       string, from $Sizes
    variant:    primary, secondary, danger, warning, success
*/

const Badge = class extends React.Component {
    render() {
        const baseClass = "badge";
        let className = baseClass;

        if (this.props.size) {
            className += " -" + this.props.size;
        }

        if (this.props.variant) {
            className += " -" + this.props.variant;
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

export default Badge
