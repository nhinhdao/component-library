import React from 'react'
import './label.scss';

/* Interface
    className:  string,
    size:       string, from $Sizes
    color:      string, from $Colors
    tokens:     array of strings, from @typeTokens
*/

const Label = class extends React.Component {
    constructor(props) {
        console.log(props);
        super(props)
    }

    render() {
        let className = "";

        if (this.props.size) {
            className += " -" + this.props.size;
        }

        if (this.props.color) {
            className += " color-" + this.props.color;
        }

        if (Array.isArray(this.props.tokens)) {
            for (let i = 0; i < this.props.tokens.length; i++) {
                className += " -" + this.props.tokens[i].replace(" ", "");
            }
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return (
            <label className={className}>
                { this.props.children }
            </label>
        )
    }
}

export default Label
