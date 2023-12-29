import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MemberApp from "../src/member/index";
import Hello from "./Hello";

const App = () => {
    return (
        <Routes>
            <Route path="/*" name="Member Home" element={<MemberApp />} />
            <Route path="/hello" name="Hello Page" exact element={<Hello />} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    );
};

export default App;
