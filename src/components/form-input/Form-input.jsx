import React from "react";

import css from './Form-input.module.scss';


const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className={css.group}>
        <input
            className={css.form_input}
            {...otherProps}
            onChange={handleChange}
        />
        {label 
        ?        <label 
                    className={`${otherProps.value.length ? css.shrink : ""} ${css.form_input_label}`}
                    >
                        {label}
                 </label> 
        : null}
    </div>
)


export default FormInput;