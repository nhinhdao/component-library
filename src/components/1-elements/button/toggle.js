import React from 'react'
import './button.scss';
import Icon from '../icon/icon';

/* Interface
    checked:       boolean
    className:     string,
    color:         string, from $Colors
    disabled:      boolean
    labelledBy:    string
    onClick:       any,
    size:          string, from $Sizes
    tags:          array<string>
    iconOn:        string,
    iconOff:       string,
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
                aria-labelledby = { this.props.labelledBy }
                className       = { className }
                disabled        = { this.props.disabled }
                onClick         = { this.props.onClick }
                role            = "switch"
                type            = "button"
            >
                <span className={baseClass + "-on"}>
                    {
                        this.props.onIcon &&
                        <Icon
                            className   = { baseClass + "-on-icon"}
                            icon    = {this.props.onIcon}
                            size    = {this.props.size}
                        />
                    }
                    {
                        this.props.onLabel &&
                        <span className   = { baseClass + "-on-label"}>
                            { this.props.onLabel}
                        </span>
                    }
                </span>
                <span className={baseClass + "-off"}>
                    {
                        this.props.offIcon &&
                        <Icon
                            className   = { baseClass + "-off-icon"}
                            icon    = {this.props.offIcon}
                            size    = {this.props.size}
                        />
                    }
                    {
                        this.props.offLabel &&
                        <span className   = { baseClass + "-off-label"}>
                            { this.props.offLabel }
                        </span>
                    }
                </span>
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
