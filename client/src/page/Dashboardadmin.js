import React from 'react'
import HeaderBar from '../layout/HeaderBar'
import SideBar from '../layout/SideBar'
import  { useEffect } from "react";



// import "../index.css";
function Dashboardadmin() {
  // export default function StickyFooter() {
    useEffect(() => {
      const token = localStorage.getItem("token");
      fetch("http://localhost:3333/authen", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "ok") {
            // alert("authen sucess");
            // console.log("Success:", data);
          } else {
            localStorage.removeItem("token");
            alert("authen feild");
            window.location = "/login";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, []);
    // ตัวแปลไปหน้า login พร้อมremove ค่า token
    
  
  return (
    <>
    <HeaderBar/>
    <SideBar/>
    </>
  )
}

export default Dashboardadmin