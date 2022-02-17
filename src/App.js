import './styles/App.css';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {VisibleContext} from "./context";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Feed from "./pages/Feed";
import Create from "./pages/Create";

function App() {
    const [modalReport, setModalReport] = useState(false)
    const [modalSignIn, setModalSignIn] = useState(false)
    const [modalSignUp, setModalSignUp] = useState(false)
    const [modalShowPreview, setModalShowPreview] = useState(false)

    return (
        <div className="App">
            <VisibleContext.Provider value={{
                modalReport,
                setModalReport,
                modalSignIn,
                setModalSignIn,
                modalSignUp,
                setModalSignUp,
                modalShowPreview,
                setModalShowPreview
            }}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={ <Feed /> }/>
                        <Route exact path="/Feed" element={ <Navigate to="/" /> }/>
                        <Route exact path="/create" element={ <Create /> }/>
                        <Route path="*" element={ <NotFound />}/>
                    </Routes>
                </BrowserRouter>
            </VisibleContext.Provider>
        </div>
    );
}

export default App;
