import React from 'react'
import './hook.scss';
import Input from "../../1-elements/input/input";
import Button from "../../1-elements/button/button";

/* Interface
    axis
    placeholder
    button
    size
    tags
*/

const Hook = class extends React.Component {
    render() {
        const baseClass = "hook";
        let className = baseClass;

        let size;
        if (size && size !== "default") {
            className += " -" + this.props.size;
            size = this.props.size;
        }

        if (this.props.axis) {
            className += " -" + this.props.axis;
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
            <form className={className}>
                <Input
                    placeholder = { "enter your email"}
                    type        = { "email" }
                />
                <Button tags={["primary"]}>Subscribe</Button>
            </form>
        )
    }
}

export default Hook
