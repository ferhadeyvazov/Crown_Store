import React from "react";

import css from './Custom-button.module.scss'


const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button
        className={`${isGoogleSignIn ? css.google_sign_in : ''} 
        ${css.custom_button}`} {...otherProps}
        >
        {children}
    </button>
)

export default CustomButton;