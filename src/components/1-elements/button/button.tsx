import React from 'react'
import './button.scss';
import Icon from "../icon/icon";
import { iconSet } from '../icon/icon-set';
import { Sizes } from '../../../constants/sizes';

export interface ButtonProps {
    className?:     string,
    size?:          keyof typeof Sizes,
    iconSide?:      string,
    tags?:          Array<string>,
    labelledBy?:    string,
    onClick?:       any,
    disabled?:      boolean,
    icon?:          keyof typeof iconSet,
}


export const Button = class extends React.Component<ButtonProps, any> {
    constructor(props: ButtonProps) {
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
                aria-labelledby = { this.props.labelledBy }
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
        if (this.props.onClick != null) {
            console.log("onClick");
            this.props.onClick();
        }
    }
}

/**
 * The generic `button` is your go-to element for changing anything within the interface (using JavaScript and without reloading the page) except one’s location within and between documents, which is the purview of links.
 */
export default Button
