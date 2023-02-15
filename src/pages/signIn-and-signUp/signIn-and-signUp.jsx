import React from "react";

import css from './signIn-and-signUp.module.scss';
import SignIn from "../../components/sign-In/Sign-in";


const SignInAndSignUpPage = () => (

    <div className={css.signIn_and_signUp}>
        <SignIn />
    </div>

)

export default SignInAndSignUpPage;