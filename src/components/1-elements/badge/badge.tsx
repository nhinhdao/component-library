import React from 'react'
import './badge.scss';

export interface BadgeProps {
    className?: string,
    size: keyof typeof BadgeSizes,
    tags: string[],
    variant: keyof typeof BadgeVariants,
}

export const BadgeVariants = {
    Primary: "primary" as "Primary",
    Secondary: "secondary" as "Secondary",
    Danger: "danger" as "Danger",
    Warning: "warning" as "Warning",
    Success: "success" as "Success",
}

export const BadgeSizes = {
    Default: "default" as "Default",
    Small: "small" as "Small",
    Large: "large" as "Large",
}

export class Badge extends React.Component<BadgeProps, {}> {

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