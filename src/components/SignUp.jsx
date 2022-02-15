import React, {useContext} from 'react';
import Modal from "./UI/Modal/Modal";
import {Button, Input} from "@mui/material";
import {VisibleContext} from "../context";
import classes from "./models/SignIn.module.css";

const SignUp = () => {
    const {modalSignUp, setModalSignUp} = useContext(VisibleContext)
    return (
        <Modal visible={modalSignUp} setVisible={setModalSignUp}>
            <p className={classes.heading}>Sign Up</p>
            <div className={classes.inputWrapper}>
                <Input className={classes.input} type="text" placeholder="username"/>
                <Input className={classes.input} type="password" placeholder="password"/>
                <Input className={classes.input} type="password" placeholder="Repeat password"/>
                <Input className={classes.input} type="text" placeholder="E-mail"/>
            </div>
            <Button variant="outlined">Continue</Button>
        </Modal>
    );
};

export default SignUp;