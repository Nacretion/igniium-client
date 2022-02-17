import React, {useContext} from 'react';
import Modal from "./UI/Modal/Modal";
import {Button, Input} from "@mui/material";
import {VisibleContext} from "../context";
import classes from "./models/SignIn.module.css";
import GoogleLogin from "react-google-login";
import {logDOM} from "@testing-library/react";

const SignIn = () => {
    const {modalSignIn, setModalSignIn, setModalSignUp} = useContext(VisibleContext)

    const toggleRegister = () => {
        setModalSignIn(false)
        setModalSignUp(true)
    }

    return (
            <Modal visible={modalSignIn} setVisible={setModalSignIn}>
                <div style={{display: "flex"}}>
                    <p className={classes.heading}>Sign in /&nbsp;</p>{}
                    <a className={classes.heading} onClick={toggleRegister}>&nbsp;Register</a>
                </div>
                <div className={classes.inputWrapper}>
                    <Input className={classes.input} type="text" placeholder="USERNAME"/>
                    <Input className={classes.input} type="password" placeholder="PASSWORD"/>
                </div>
                <GoogleLogin
                    style={{margin: "1vh 1vw"}}
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    cookiePolicy={'single_host_origin'}
                />
                <Button className={classes.btn} variant="outlined">Continue</Button>
            </Modal>
    );
};

export default SignIn;