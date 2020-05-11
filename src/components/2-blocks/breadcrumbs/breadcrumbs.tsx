import React from 'react'
import './breadcrumbs.scss';
import A from '../../1-elements/link/link';
import { Sizes } from '../../../constants/sizes';


export interface BreadcrumbsProps {
    className?: string,
    size:       keyof typeof Sizes,
    tags:       string[],
    items:      BreadcrumbItem[],
}

export interface BreadcrumbItem {
    ariaLabel:  string
    href:       string
    name:       string
    target:     string
}

const Breadcrumbs = class extends React.Component<BreadcrumbsProps, any> {
    render() {
        const baseClass = "breadcrumbs";
        let className = baseClass;


        let size: keyof typeof Sizes;
        if (this.props.size && this.props.size !== Sizes.base) {
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
