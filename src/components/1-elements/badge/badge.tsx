import React from 'react'
import './badge.scss';

export interface BadgeProps {
    className?: string,
    size?:      string,
    tags?:      string[],
    variant?:   keyof typeof badgeVariants,
}

export const badgeVariants = {
    primary:    "primary",
    secondary:  "secondary",
    danger:     "danger",
    warning:    "warning",
    success:    "success",
}

export class Badge extends React.Component<BadgeProps, null> {

    render() {
        const baseClass = "badge";
        let className = baseClass;

        if (this.props.size) {
            className += " -" + this.props.size;
        }

        if (this.props.variant) {
            className += " -" + this.props.variant;
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
            <label className={className}>
                {this.props.children}
            </label>
        )
    }
}

export default Badge