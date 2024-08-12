import React from "react";
import Menu from "../../Components/menu";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const IndexMobile = () => {

    const over = event => {
        const el = event.target;
        el.style.backgroundColor = "#efd197"
    };
    const out = event => {
        const el = event.target;
        el.style.backgroundColor = "#f4e0b9"
    }

    return ( 
        
        <>
        <div style = {{display: "grid", }}>
            <div style = {{display: "block", paddingBottom: "40px", paddingTop: "20px", backgroundColor: "#fff5e0"}}>
                <div style = {{display: "flex", float: "left", paddingLeft: "5%",  height: "0vh"}}>
                    <Menu />
                </div>
                <div style = {{display: "flex", float: "right", paddingRight: "5%", justifyItems: "center", alignItems: "center", paddingTop: "5px"}}>   
                    <p style = {{fontSize: "20px", margin: "0"}}>STEPHEN COLBERT</p>
                </div>
            </div>
      <div  style = {{minHeight: "80vh", backgroundColor: "#fff5e0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style = {{width: "80%", padding: "0", margin: "0"}}>
            <img src = {require("../../static/stephen-main.jpg")} alt = "Main" width = "100%" height = "500vh"/>
                <p style = {{fontSize: "35px", padding: "0", margin: "0", fontWeight: "bold", paddingBottom: "10px"}}>STEPHEN COLBERT</p>
                <p style = {{padding: "0", margin: "0", fontSize: "25px", paddingBottom: "10px"}}>Actor and Entertainer</p>
                <NavLink to = "/contact">
                    <button type = "button"  role = "link" onMouseOver = {(event) => over(event)} onMouseOut = {(event) => out(event)} style = {{fontSize: "30px", textAlign: "center", outline: "0", alignItems: "center",  border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: "#f4e0b9",  textDecoration: "none", display: "inline-flex", height: "60px", width: "180px"}}> 
                            <p >CONTACT</p>
                    </button>
                </NavLink>
        </div>
        
        </div>
        </div>
        </div>
        </>
    );

};
 
export default IndexMobile;
