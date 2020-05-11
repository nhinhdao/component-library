import React from 'react'
import './input.scss';
import { Sizes } from '../../../constants/sizes';

export interface CheckboxProps {
    className?: string,
    disabled?:  boolean,
    size?:      keyof typeof Sizes,
    checked?:   boolean,
    onChange?:  any,
}

const Checkbox = class extends React.Component<CheckboxProps, any> {
    render() {
        let className = "";

        if (this.props.size) {
            className += " -" + this.props.size;
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return (
            <input
                className   = { className }
                type        = "checkbox"
                disabled    = { this.props.disabled }
                checked     = { this.props.checked }
                onChange    = { this.props.onChange }
            />
        )
    }
}

export default Checkbox
