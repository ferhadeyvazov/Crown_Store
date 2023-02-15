import { React, useState } from "react";
import FormInput from "../form-input/Form-input";
import CustomButton from "../custom-button/Custom-button.";
import css from './Sign-in.module.scss'

const SignIn = () => {
    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e)=>{
        const {value, name}= e.target;
        setFormValue((prevState)=>{
            return{
                ...prevState,
                [name]: value
            }
    })

    }

    const { email, password } = formValue;
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValue);

        
    }


    return (
        <div className={css.sign_in}>
            <h2>I already have an account</h2>
            <span className={css.title}>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                type="email" 
                name="email" 
                value={email} 
                handleChange={handleChange}
                label="email"
                required 
                />

                <FormInput 
                type="password" 
                name="password" 
                value={password} 
                handleChange={handleChange}
                label="password"
                required 
                />

                <CustomButton type="submit">Sign in</CustomButton>
            </form>
        </div>
    )
}

export default SignIn;