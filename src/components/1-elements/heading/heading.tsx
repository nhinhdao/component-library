import React from 'react'
import './heading.scss';
import { Colors } from '../../../constants/colors';
import { typeTags } from '../../../constants/type-tags';

/* Interface
    className:  string,
    color:      string, from $Colors
    tags:     array of strings, from @typeTags
*/

export interface HeadingProps {
    className?: string,
    color?:     keyof typeof Colors,
    tags?:      Array<keyof typeof typeTags>,
}

const H1 = class extends React.Component<HeadingProps, any> {
    constructor(props: HeadingProps) {
        console.log(props);
        super(props)
    }

    render() {
        let className = "";

        if (this.props.color) {
            className += " color-" + this.props.color;
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
            <h1 className={className}>
                { this.props.children }
            </h1>
        )
    }
}

const H2 = class extends React.Component<HeadingProps, any> {
    constructor(props: HeadingProps) {
        console.log(props);
        super(props)
    }

    render() {
        let className = "";

        if (this.props.color) {
            className += " color-" + this.props.color;
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
            <h2 className={className}>
                { this.props.children }
            </h2>
        )
    }
}

const H3 = class extends React.Component<HeadingProps, any> {
    constructor(props: HeadingProps) {
        console.log(props);
        super(props)
    }

    render() {
        let className = "";

        if (this.props.color) {
            className += " color-" + this.props.color;
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
            <h3 className={className}>
                { this.props.children }
            </h3>
        )
    }
}

const H4 = class extends React.Component<HeadingProps, any> {
    constructor(props: HeadingProps) {
        console.log(props);
        super(props)
    }

    render() {
        let className = "";

        if (this.props.color) {
            className += " color-" + this.props.color;
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
            <h4 className={className}>
                { this.props.children }
            </h4>
        )
    }
}

const H5 = class extends React.Component<HeadingProps, any> {
    constructor(props: HeadingProps) {
        console.log(props);
        super(props)
    }

    render() {
        let className = "";

        if (this.props.color) {
            className += " color-" + this.props.color;
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
            <h5 className={className}>
                { this.props.children }
            </h5>
        )
    }
}

const H6 = class extends React.Component<HeadingProps, any> {
    constructor(props: HeadingProps) {
        console.log(props);
        super(props)
    }

    render() {
        let className = "";

        if (this.props.color) {
            className += " color-" + this.props.color;
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
            <h6 className={className}>
                { this.props.children }
            </h6>
        )
    }
}

export default {
    One:    H1,
    Two:    H2,
    Three:  H3,
    Four:   H4,
    Five:   H5,
    Six:    H6,
}
