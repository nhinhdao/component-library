import React from 'react'
import './link.scss';

/* Interface
    className:  string,
    size:       string, from $Sizes
    href:       string,
    target:     string,
    ariaLabel:  string,
    tags:       array of strings,
*/

const A = class extends React.Component {
    constructor(props) {
        console.log(props);
        super(props)
    }

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
                href        = { this.props.href }
                target      = { this.props.target }
                aria-label  = { this.props.ariaLabel }
                className   = { className }
            >
                { this.props.children }
            </a>
        )
    }
}

export default A
