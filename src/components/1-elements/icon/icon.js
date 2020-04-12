import React from 'react'
import './icon.scss';
import iconSet from './icon-set';

/* Interface
    icon: string
    size: string
    color: string
    tags: array<string>
*/

const Icon = class extends React.Component {
    render() {
        const baseClass = "icon";
        let className = baseClass;

        let size;
        switch (this.props.size) {
            case "large":
                size = "1.25em";
                break;
            case "xlarge":
                size = "2em";
                break;
            case "xxlarge":
                size = "4em";
                break;
            default:
                size = "1em";
        }

        if (this.props.size && this.props.size !== "default") {
            className += " -" + this.props.size;
        }

        
       

        if (this.props.color) {
            className += " color-" + this.props.color;
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
            <i className={className}>
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" aria-labelledby="title">
	                <title id="title">{ this.props.icon } Icon</title>
                    { iconSet[this.props.icon] }
                </svg>
            </i>
        )
    }
}

export default Icon
