import React from 'react'
import './link.scss';
import { Sizes } from '../../../constants/sizes';



export interface LinkProps {
    label?:             string,
    labelledBy?:        string,
    className?:         string,
    href:               string,
    size?:              keyof typeof Sizes,
    tags?:              string[],
    target?:            string,
}

const A = class extends React.Component<LinkProps, any> {

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
            <a
                href            = { this.props.href }
                target          = { this.props.target }
                aria-label      = { this.props.label }
                aria-labelledBy = { this.props.labelledBy }
                className       = { className }
            >
                { this.props.children }
            </a>
        )
    }
}

export default A
