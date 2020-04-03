import React from 'react'
import './media.scss';

/* Interface
    axis:           string, horizontal or vertical
    className:      string,
    tags:           array<string>
    media:          string,
    size:           string,
    altText:        string,
    body:           string,
*/

const Nav = class extends React.Component {
    render() {
        const baseClass = "media";
        let className = baseClass;

        if (this.props.axis) {
            className += " -" + this.props.axis;
        }

        if (this.props.size && this.props.size !== "default") {
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
            <div className={className}>
                <div className   = {baseClass + "-img"}>
                    <img
                        alt         = {this.props.altText}
                        src         = {this.props.media}
                    />
                </div>
                <div className={baseClass + "-body"}>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Nav
