import React, {useState} from 'react';
import {Button, Checkbox, FormControlLabel, MenuItem, TextField} from "@mui/material";
import classes from "../styles/Create.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChipInput from 'material-ui-chip-input';
import FileUpload from "../components/UI/FileUpload/FileUpload";
import {useLocation, useNavigate} from "react-router-dom";


const Create = () => {
    const location = useLocation();
    const [newTitleID, setNewTitleID] = useState("1")
    const [newPreview, setNewPreview] = useState({
        filesReport: []
    })
    const [newPages, setNewPages] = useState({
        filesReport: []
    })
    const navigate = useNavigate();

    const updateUploadedPreview = (files) =>
        setNewPreview({ ...newPreview, filesReport: files });
    const updateUploadedPages = (files) =>
        setNewPages({ ...newPages, filesReport: files });

    const handleSubmit = (event) => {
        event.preventDefault()
        //logic

        setNewPreview({
            filesReport: []
        })
        navigate(location.pathname +"/"+ newTitleID)
    }

    return (
        <>
            <Header/>
            <form className={classes.create} onSubmit={handleSubmit}>
                <h1>Create a title</h1>
                <TextField
                    style={{marginBottom: "2vh"}}
                    className={classes.input}
                    id="standard-textarea"
                    label="Title name"
                    placeholder="Name"
                    variant="standard"
                />
                <TextField
                    style={{marginBottom: "2vh"}}
                    className={classes.input}
                    id="standard-textarea"
                    label="Title author"
                    placeholder="Author"
                    variant="standard"
                />
                <TextField
                    style={{marginBottom: "2vh"}}
                    className={classes.input}
                    id="standard-textarea"
                    label="Title description"
                    placeholder="Description"
                    variant="standard"
                    multiline
                />
                <TextField
                    style={{marginBottom: "2vh"}}
                    className={classes.input}
                    id="standard-textarea"
                    label="Title name"
                    placeholder="Name"
                    variant="standard"
                />
                <ChipInput
                    className={classes.input}
                    label="Title genres"
                    style={{
                        marginTop: "2vh",
                        minHeight: "6vh"
                    }}
                />
                <ChipInput
                    className={classes.input}
                    label="Title tags"
                    style={{
                        marginTop: "2vh",
                        minHeight: "6vh"
                    }}
                />
                <div className={classes.selectWrapper}>
                    <TextField
                        select
                        className={classes.select}
                        label="Status"
                    >
                        <MenuItem value={0}>Completed</MenuItem>
                        <MenuItem value={1}>Ongoing</MenuItem>
                    </TextField>
                    <FormControlLabel
                        className={classes.select}
                        control={<Checkbox />}
                        label='NSFW'
                        style={{margin: "0"}}
                    />
                </div>

                <FileUpload
                    heading="preview"
                    accept=".jpg,.png,.jpeg"
                    updateFilesCb={updateUploadedPreview}
                />

                <FileUpload
                    heading="pages"
                    accept=".jpg,.png,.jpeg"
                    multiple
                    updateFilesCb={updateUploadedPages}
                />
                <Button
                    variant="outlined"
                    type="submit"
                    sx={{
                        color: '#8163ff',
                        borderColor: "#8163ff",
                        '&:hover': {
                            backgroundColor: '#8163ff',
                            color: "#fff",
                        },
                    }}>Continue</Button>
            </form>
            <Footer/>
        </>
    );
};

export default Create;