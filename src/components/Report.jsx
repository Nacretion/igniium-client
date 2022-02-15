import React, {useContext, useState} from 'react';
import Modal from "./UI/Modal/Modal";
import classes from "./models/SignIn.module.css";
import {Button, Input, TextField} from "@mui/material";
import {VisibleContext} from "../context";
import FileUpload from "./UI/FileUpload/FileUpload";
import { useNavigate } from 'react-router-dom';

const Report = ({redirect}) => {
    const {modalReport, setModalReport} = useContext(VisibleContext)
    const [newFiles, setNewFiles] = useState({
        filesReport: []
    })
    const navigate = useNavigate();

    const updateUploadedFiles = (files) =>
        setNewFiles({ ...newFiles, filesReport: files });


    const handleSubmit = (event) => {
        event.preventDefault()
        //logic

        setNewFiles({
            filesReport: []
        })
        setModalReport(false)
        if (redirect) {
            navigate("/")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Modal visible={modalReport} setVisible={setModalReport}>
                <p className={classes.heading}>Report your problem</p>
                <div className={classes.inputWrapper}>
                    <TextField
                        style={{marginBottom: "2vh"}}
                        className={classes.input}
                        id="standard-textarea"
                        label="E-mail"
                        placeholder="Enter your e-mail"
                        variant="standard"
                    />
                    <TextField
                        style={{marginBottom: "2vh"}}
                        className={classes.textField}
                        id="standard-textarea"
                        label="Problem"
                        placeholder="Describe your problem"
                        multiline
                        variant="standard"
                    />
                </div>
                <FileUpload
                    accept=".jpg,.png,.jpeg"
                    multiple
                    updateFilesCb={updateUploadedFiles}
                />

                <Button type="submit" variant="outlined">Continue</Button>
            </Modal>
        </form>
    );
};

export default Report;