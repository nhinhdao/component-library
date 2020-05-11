import React from 'react'
import './button.scss';
import Icon from '../icon/icon';
import { Sizes } from '../../../constants/sizes';
import { typeTags } from '../../../constants/type-tags';

export interface ToggleProps {
    className?:     string,
    size?:          keyof typeof Sizes,
    tags?:          Array<keyof typeof typeTags>,
    checked?:       boolean,
    label?:         string,
    labelledBy?:    string,
    disabled?:      boolean,
    onClick?:       any,
    onIcon?:        string,
    onLabel?:       string,
    offIcon?:       string,
    offLabel?:      string,
}

const Toggle = class extends React.Component<ToggleProps, any> {
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
