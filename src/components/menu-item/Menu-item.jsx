import React from "react";
import { NavLink } from 'react-router-dom';
import './Menu-item.scss'

import Items from './Items';


const MenuItem = ({ linkUrl, size, ...otherSectionProps }) => (
    <NavLink className={`${size} menu-item`} to={linkUrl}>
        <Items {...otherSectionProps}  />
    </NavLink>
)

export default MenuItem;