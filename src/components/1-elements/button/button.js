import React from 'react'
import './button.scss';

/* Interface
    className:  string,
    onClick:    any,
*/

const Button = class extends React.Component {
    constructor(props) {
        console.log(props);
        super(props)
    }

    render() {
        return (
            <button onClick={ this.props.onClick }>
                { this.props.children }
            </button>
        )
    }

    onClick() {
        console.log("clicked");
        if (this.props.onClick != null) {
            this.props.onClick();
        }
    }
}

export default Button
