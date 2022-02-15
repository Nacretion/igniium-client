import React, {useContext} from 'react';
import Image from "react-bootstrap/Image";
import classes from "./models/Header.module.css";
import comics from '../assets/comics.png'
import {Urls} from "../utils/urls";
import {Button} from "@mui/material";
import {VisibleContext} from "../context";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    const {setModalSignIn, setModalSignUp} = useContext(VisibleContext)
    return (
        <header className={classes.header}>
            <a onClick={()=> navigate("/")}>
                <Image className={classes.image} src={comics} />
            </a>
            <nav className={classes.nav}>
                <div className={classes.linkWrapper}>
                    <a className={classes.link}
                       onClick={()=> navigate("/")}
                    >Feed</a>
                </div>
                <div className={classes.linkWrapper}>
                    <Button
                        variant="outlined"
                        sx={{
                            color: '#8163ff',
                            borderColor: "#8163ff",
                            '&:hover': {
                                backgroundColor: '#8163ff',
                                color: "#fff",
                            },
                        }}
                        onClick={()=> navigate("/create")}
                    >Create</Button>
                    <a className={classes.link} onClick={() => setModalSignIn(true)}>Sign in</a>
                    <a className={classes.link} onClick={() => setModalSignUp(true)}>Sign up</a>
                </div>

            </nav>
        </header>
    );
};

export default Header;