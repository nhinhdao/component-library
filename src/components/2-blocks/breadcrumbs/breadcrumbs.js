import React from 'react'
import './breadcrumbs.scss';
import A from '../../1-elements/link/link';

/* Interface
    size:           string, from $Sizes
    tags:           array<string>
    items:          array<{
        ariaLabel:  string
        href:       string
        name:       string
        target:     string
    }>
*/

const Breadcrumbs = class extends React.Component {
    render() {
        const baseClass = "breadcrumbs";
        let className = baseClass;

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
                <ol>
                {
                    this.props.items.map((item, key) => {
                        let isActive = false;
                        let href = item.href;
                        if (key === this.props.items.length - 1) {
                            isActive = true;
                            href = null
                        }
                        return (
                            <li className={baseClass + "-item"}>
                                <A
                                    ariaLabel   = { item.ariaLabel }
                                    className   = { isActive ? " -active" : ""}
                                    href        = { href }
                                    key         = { "navItem-" + key }
                                    size        = { size }
                                    tags        = { ["plain"]}
                                >{ item.name }</A>
                            </li>
                            
                        );
                    })
                }
                </ol>
            </nav>
        )
    }
}

export default Breadcrumbs
