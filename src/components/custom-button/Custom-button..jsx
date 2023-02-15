import React from "react";

import css from './Custom-button.module.scss'


const CustomButton = ({children, ...otherProps})=>(
    <button className={css.custom_button} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;