import React from 'react'
import './input.scss';

/* Interface
    className:      string,
    disabled:       boolean,
    invalid:        boolan;
    size:           string, from $Sizes
    checkd:         boolean,
*/

const Checkbox = class extends React.Component {
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
