import React from 'react'
import './input.scss';
import { Sizes } from '../../../constants/sizes';

export interface InputProps {
    className?: string,
    disabled?:      boolean,
    invalid?:       boolean,
    placeholder?:   string,
    size?:          keyof typeof Sizes,
    tags?:          Array<keyof typeof inputTags>,
    type?:          keyof typeof inputTypes,
    value?:         any,
}

export const inputTypes = {
    color:      "color",
    date:       "date",
    email:      "email",
    file:       "file",
    number:     "number",
    password:   "password",
    radio:      "radio",
    range:      "range",
    text:       "text",
    time:       "time",
}

export const inputTags = {
    fullWidth: "fullWidth"
}


const Input = class extends React.Component<InputProps, any> {
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
