import React from 'react'
import './field.scss';
import Label from '../../1-elements/label/label';
import P from '../../1-elements/paragraph/paragraph';
import Input from '../../1-elements/input/input';

/* Interface
    axis:           string, horizontal or vertical
    className:      string,
    disabled:       boolean,
    id:             string,
    invalid:        boolan,
    label:          string,
    message:        string,
    placeholder:    string,
    size:           string, from $Sizes
    tags:           array of strings
    type:           string,
*/

const Field = class extends React.Component {
    render() {
        let className = "field";

        let size;
        if (size && size !== "default") {
            className += " -" + this.props.size;
            size = this.props.size;
        }

        if (this.props.axis) {
            className += " -" + this.props.axis;
        }

        if (this.props.invalid) {
            className += " -invalid";
        }

        if (Array.isArray(this.props.tags)) {
            for (let i = 0; i < this.props.tags.length; i++) {
                className += " -" + this.props.tags[i].replace(" ", "");
            }
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        let type = "text";
        if (this.props.type) {
            type = this.props.type;
        }

        let id = "todo-id-generator";
        if (!this.props.id) {
            id = this.props.id;
        }

        return (
            <div className={className}>
                {
                    this.props.label &&
                    <Label
                        for     = { id }
                        size    = { size }
                        tags    = { [this.props.disabled ? "muted" : ""]}
                    >{ this.props.label }</Label>
                }
                <Input
                    disabled    = { this.props.disabled }
                    id          = { id }
                    invalid     = { this.props.invalid }
                    placeholder = { this.props.placeholder }
                    size        = { size }
                    type        = { type }
                />
                {
                    this.props.message &&
                    <P
                        size="small"
                        tags={["muted"]}
                    >{ this.props.message }</P>
                }
                
            </div>
        )
    }
}

export default Field
