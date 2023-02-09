import React from "react";

import './Directory.style.scss';
import MenuItem from '../menu-item/Menu-item';

class Directory extends React.Component {
    constructor(props) {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'hats',
                    imageUrl: '../../img/4.jpeg',
                    linkUrl: 'hats'
                },
                {
                    id: 2,
                    title: 'jackets',
                    imageUrl: '../../img/3.jpeg',
                    linkUrl: 'jackets'
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imageUrl: '../../img/2.jpeg',
                    linkUrl: 'sneakers'
                },
                {
                    id: 4,
                    title: 'women',
                    imageUrl: '../../img/5.jpeg',
                    size: "large",
                    linkUrl: 'women'
                },
                {
                    id: 5,
                    title: 'man',
                    imageUrl: '../../img/1.jpeg',
                    size: "large",
                    linkUrl: 'man'
                }
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps})=>(
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}


export default Directory;