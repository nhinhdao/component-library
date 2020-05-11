import React from 'react'
import './field.scss';
import Label from '../../1-elements/label/label';
import P from '../../1-elements/paragraph/paragraph';
import Input, { inputTypes } from '../../1-elements/input/input';
import { Axes } from '../../../constants/axes';
import { Sizes } from '../../../constants/sizes';


export interface InputProps {
    axis?:          keyof typeof Axes,
    className?:     string,
    disabled?:      boolean,
    label?:         string,
    message?:       string,
    placeholder?:   string,
    size?:          keyof typeof Sizes,
    type?:          keyof typeof inputTypes,
    invalid?:       boolean,
    id?:            string,
}



const Field = class extends React.Component<InputProps, any> {
    render() {
        let className = "field";

        let size: any;
        if (this.props.size && this.props.size !== Sizes.base) {
            className += " -" + this.props.size;
            size = this.props.size;
        }

        if (this.props.axis) {
            className += " -" + this.props.axis;
        }

        if (this.props.invalid) {
            className += " -invalid";
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        let type: any = inputTypes.text;
        if (this.props.type) {
            type = this.props.type;
        }

        let id: string = "todo-id-generator";
        if (this.props.id) {
            id = this.props.id;
        }

        return (
            <div className={className}>
                {
                    this.props.label &&
                    <Label
                        for     = { id }
                        size    = { size }
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
