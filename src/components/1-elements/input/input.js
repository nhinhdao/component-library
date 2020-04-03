import React from 'react'
import './input.scss';

/* Interface
    className:      string,
    disabled:       boolean,
    invalid:        boolan;
    placeholder:    string,
    size:           string, from $Sizes
    type:           string,
    value:          string,
*/

const Input = class extends React.Component {
    render() {
        let className = "";

        if (this.props.size) {
            className += " -" + this.props.size;
        }

        if (Array.isArray(this.props.tags)) {
            for (let i = 0; i < this.props.tags.length; i++) {
                className += " -" + this.props.tags[i].replace(" ", "");
            }
        }

        if (this.props.invalid) {
            className += " -invalid";
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        let type = "text";
        if (this.props.type) {
            type = this.props.type;
        }

        return (
            <input
                className   = { className }
                type        = { type }
                value       = { this.props.value }
                placeholder = { this.props.placeholder}
                disabled    = { this.props.disabled }
            />
        )
    }
}

export default Input
