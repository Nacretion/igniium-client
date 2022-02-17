import React, {useContext} from 'react';
import Modal from "./UI/Modal/Modal";
import {Button, Input} from "@mui/material";
import {VisibleContext} from "../context";
import classes from "./models/SignIn.module.css";

const SignUp = () => {
    const {modalSignUp, setModalSignUp, setModalSignIn} = useContext(VisibleContext)


    const toggleRegister = () => {
        setModalSignUp(false)
        setModalSignIn(true)
    }

    return (
        <Modal visible={modalSignUp} setVisible={setModalSignUp}>
            <div style={{display: "flex"}}>
                <a className={classes.heading} onClick={toggleRegister}> Sign Up</a>
                <p className={classes.heading}>&nbsp;/&nbsp;Register</p>
            </div>
            <div className={classes.inputWrapper}>
                <Input className={classes.input} type="text" placeholder="E-MAIL"/>
                <Input className={classes.input} type="text" placeholder="USERNAME"/>
                <Input className={classes.input} type="password" placeholder="PASSWORD"/>
                <Input className={classes.input} type="password" placeholder="REPEAT PASSWORD"/>
            </div>
            <Button variant="outlined">Continue</Button>
        </Modal>
    );
};

export default SignUp;