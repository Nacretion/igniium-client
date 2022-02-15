import React from 'react';
import Header from "../components/Header";
import SignIn from "../components/SignIn";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
import classes from "../styles/Feed.module.css";
import {TextField} from "@mui/material";
import Image from "react-bootstrap/Image";
import comic from "../assets/comic.jpg"

const Feed = () => {
    return (
        <>
            <Header />
            <div className={classes.contentWrapper}>


                <SignIn />
                <SignUp />
                <TextField
                    style={{marginBottom: "2vh"}}
                    className={classes.input}
                    id="standard-textarea"
                    label="Search"
                    variant="standard"
                />
                <div className={classes.cardsWrapper}>
                    <Image className={classes.card} src={comic} />
                    <Image className={classes.card} src={comic} />
                    <Image className={classes.card} src={comic} />
                    <Image className={classes.card} src={comic} />
                    <Image className={classes.card} src={comic} />
                    <Image className={classes.card} src={comic} />
                    <Image className={classes.card} src={comic} />
                    <Image className={classes.card} src={comic} />
                    <Image className={classes.card} src={comic} />
                    <Image className={classes.card} src={comic} />
                    <Image className={classes.card} src={comic} />
                    <Image className={classes.card} src={comic} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Feed;