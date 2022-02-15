import React, {useContext} from 'react';
import Modal from "./UI/Modal/Modal";
import {Button, Input} from "@mui/material";
import {VisibleContext} from "../context";
import classes from "./models/SignIn.module.css";

const SignIn = () => {
    const {modalSignIn, setModalSignIn} = useContext(VisibleContext)
    return (
            <Modal visible={modalSignIn} setVisible={setModalSignIn}>
                <p className={classes.heading}>Sign in</p>
                <div className={classes.inputWrapper}>
                    <Input className={classes.input} type="text" placeholder="username"/>
                    <Input className={classes.input} type="password" placeholder="password"/>
                </div>
                <Button variant="outlined">Continue</Button>
            </Modal>
    );
};

export default SignIn;