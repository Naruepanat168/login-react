import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layout
import HeaderBar from "./layout/HeaderBar";
import { CssBaseline, Box, TextField } from "@mui/material";

import SideBar from "./layout/SideBar";



// pages
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import Dashboardadmin from "./page/Dashboardadmin";
// import A

function App() {
  // javascript

  return (
    <BrowserRouter>
      <>
        <CssBaseline />
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Dashboardadmin/>} />

        </Routes>

        
        {/* <TestRedux1 />
        <hr />
        <TestRedux2 /> */}
      </>
    </BrowserRouter>
  );
}

export default App;