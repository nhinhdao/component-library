import React from 'react'
import './button.scss';

/* Interface
    className:  string,
    color:      string, from $Colors
    onClick:    any,
    size:       string, from $Sizes
    disabled:   boolean
    tags:       array<string>
*/

const Button = class extends React.Component {
    constructor(props) {
        console.log(props);
        super(props)
    }

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

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return (
            <button
                className   = { className }
                onClick     = { this.props.onClick }
                disabled    = { this.props.disabled }
            >
                { this.props.children }
            </button>
        )
    }

    onClick() {
        console.log("clicked");
        if (this.props.onClick != null) {
            this.props.onClick();
        }
    }
}

export default Button
