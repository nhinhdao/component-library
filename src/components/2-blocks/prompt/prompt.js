import React from 'react'
import './prompt.scss';
import H from "../../1-elements/heading/heading";
import P from "../../1-elements/paragraph/paragraph";

/* Interface
    axis
    heading
    body
    size
    tags
*/

const Prompt = class extends React.Component {
    render() {
        const baseClass = "prompt";
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
            <section className={className}>
                <div className={baseClass + "-wrapper"}>
                    <div className={baseClass + "-content"}>
                        <H.One>{ this.props.heading }</H.One>
                        <P>{ this.props.body }</P>
                    </div>
                    <div className={baseClass + "-action"}>
                        { this.props.children }
                    </div>
                </div>
            </section>
        )
    }
}

export default Prompt
