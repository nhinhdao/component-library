import React from 'react'
import './list.scss';
import { Sizes } from '../../../constants/sizes';


export interface ListProps {
    className?:     string,
    ordered?:       boolean,
    size?:          keyof typeof Sizes,
    tags?:          string[],
}


const List = class extends React.Component<ListProps, any> {
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

        if (this.props.ordered) {
            return (
                <ol className={className}>
                    { this.props.children }
                </ol>
            )
        } else {
            return (
                <ul className={className}>
                    { this.props.children }
                </ul>
            )
        }

        
    }
}

export default List
