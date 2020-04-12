import React from 'react'
import './button.scss';

/* Interface
    checked:       boolean
    className:     string,
    color:         string, from $Colors
    disabled:      boolean
    labelledBy:    string
    onClick:       any,
    size:          string, from $Sizes
    tags:          array<string>
*/

const Toggle = class extends React.Component {
    constructor(props) {
        console.log(props);
        super(props)
    }

    render() {
        const baseClass = "toggle";
        let className = baseClass;

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
                aria-checked    = { this.props.checked }
                aria-labelledBy = { this.props.labelledBy }
                className       = { className }
                disabled        = { this.props.disabled }
                onClick         = { this.props.onClick }
                role            = "switch"
                type            = "button"
            >
                <span className={baseClass + "-on"}>On</span>
                <span className={baseClass + "-off"}>Off</span>
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

export default Toggle
