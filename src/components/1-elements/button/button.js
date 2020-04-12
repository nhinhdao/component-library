import React from 'react'
import './button.scss';
import Icon from "../icon/icon";

/* Interface
    labelledBy:    string
    className:          string,
    color:              string, from $Colors
    disabled:           boolean
    icon:               string,
    iconSide:           string, right or left
    onClick:            any,
    size:               string, from $Sizes
    tags:               array<string>
*/

const Button = class extends React.Component {
    constructor(props) {
        console.log(props);
        super(props)
    }

    render() {
        let className = "";
        let iconSize;

        if (this.props.size) {
            className += " -" + this.props.size;
            iconSize = this.props.size;
        }

        if (this.props.iconSide) {
            className += " -icon-" + this.props.iconSide;
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
                aria-labelledBy = { this.props.labelledBy }
                className       = { className }
                onClick         = { this.props.onClick }
                disabled        = { this.props.disabled }
            >
                {
                    this.props.icon &&
                    <Icon
                        size = { iconSize }
                        icon = { this.props.icon } />
                }
                {
                    this.props.children &&
                    <div className="button-contents">
                        { this.props.children }
                    </div>
                }
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
