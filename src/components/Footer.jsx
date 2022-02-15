import React, {useContext} from 'react';
import Image from "react-bootstrap/Image";
import {Urls} from "../utils/urls";
import SocialNetworks from "./UI/SocialNetworks/SocialNetworks";
import ignii from "../assets/ignii3.png";
import classes from "./models/Footer.module.css";
import Report from "./Report";
import {VisibleContext} from "../context";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    const {setModalReport} = useContext(VisibleContext)
    return (
        <footer className={classes.footer}>
            <Report/>
            <a onClick={()=> navigate("/")}>
                <Image className={classes.image} src={ignii} />
            </a>
            <SocialNetworks/>
            <Button
                variant="outlined"
                onClick={() => setModalReport(true)}
                sx={{
                    marginLeft: "2vw",
                    color: '#8163ff',
                    borderColor: "#8163ff",
                    '&:hover': {
                        backgroundColor: '#8163ff',
                        color: "#fff",
                    },
                }}
            >Contact us</Button>
        </footer>
    );
};

export default Footer;