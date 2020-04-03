import React from 'react'
import './nav.scss';
import A from '../../1-elements/link/link';

/* Interface
    axis:           string, horizontal or vertical
    className:      string,
    size:           string, from $Sizes
    tags:           array<string>
    items:          array<{
        active:     boolean
        ariaLabel:  string
        href:       string
        label:      string
        target:     string
    }>
*/

const Nav = class extends React.Component {
    render() {
        let className = "nav";

        if (this.props.axis) {
            className += " -" + this.props.axis;
        }


        let size;
        if (this.props.size && this.props.size !== "default") {
            className += " -" + this.props.size;
            size = this.props.size;
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
            <nav className={className}>
                {
                    this.props.items.map((item, key) => {
                        return (
                            <A
                                ariaLabel   = { item.ariaLabel }
                                className   = { item.active ? "-active" : ""}
                                href        = { item.href }
                                key         = { "navItem-" + key }
                                size        = { size }
                                tags        = { ["plain"]}
                            >{ item.label }</A>
                        );
                    })
                }
            </nav>
        )
    }
}

export default Nav
