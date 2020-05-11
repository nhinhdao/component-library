import React from 'react'
import './icon.scss';
import iconSet from './icon-set';
import { Sizes } from '../../../constants/sizes';
import { Colors } from '../../../constants/colors';

/* Interface
    icon: string
    size: string
    color: string
    tags: array<string>
*/

export interface IconProps {
    icon?:      keyof typeof iconSet;
    className?: string,
    size?:      keyof typeof Sizes;
    color?:     keyof typeof Colors;
}

const Icon = class extends React.Component<IconProps, any> {
    render() {
        const baseClass = "icon";
        let className = baseClass;

        let size;
        switch (this.props.size) {
            case "large":
                size = "1.25em";
                break;
            case "larger":
                size = "2em";
                break;
            case "largest":
                size = "4em";
                break;
            default:
                size = "1em";
        }

        if (this.props.size && this.props.size !== "base") {
            className += " -" + this.props.size;
        }

        if (this.props.color) {
            className += " color-" + this.props.color;
        }
        if (this.props.className) {
            className += " " + this.props.className;
        }

        const icon: any = this.props.icon ? iconSet[this.props.icon] : iconSet["add"];

        return (
            <i className={className}>
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" aria-labelledby="title">
	                <title id="title">{ this.props.icon } Icon</title>
                    { icon }
                </svg>
            </i>
        )
    }
}

export default Icon
