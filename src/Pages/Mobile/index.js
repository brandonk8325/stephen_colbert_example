import React from "react";
import Menu from "../../Components/menu";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

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
            <div style = {{display: "block", paddingBottom: "40px", backgroundColor: "#fff5e0"}}>
                <div style = {{display: "flex", float: "left", paddingLeft: "5%",  height: "0vh", width: "40%"}}>
                    <Menu />
                </div>
                <div style = {{display: "flex", float: "right", paddingRight: "5%", width: "60%"}}>   
                    <p style = {{fontSize: "25px", margin: "0"}}>STEPHEN COLBERT</p>
                </div>
            </div>
      <div  style = {{minHeight: "80vh", backgroundColor: "#fff5e0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style = {{width: "80%", padding: "0", margin: "0"}}>
            <img src = {require("../../static/stephen-main.jpg")} alt = "Main" width = "100%" height = "500vh"/>
                <p style = {{fontSize: "35px", padding: "0", margin: "0", fontWeight: "bold", paddingBottom: "10px"}}>STEPHEN COLBERT</p>
                <p style = {{padding: "0", margin: "0", fontSize: "25px", paddingBottom: "10px"}}>Actor and Entertainer</p>
                <a href = "/contact">
                    <button type = "button"  role = "link" onMouseOver = {(event) => over(event)} onMouseOut = {(event) => out(event)} style = {{fontSize: "40px", textAlign: "center", outline: "0", padding: "7px 16px", alignItems: "center",  border: "none", marginLeft: "auto", marginRight: "auto", borderRadius: "4px", backgroundColor: "#f4e0b9", color: "000001", textDecoration: "none", display: "inline-flex", height: "60px", width: "225px"}}> 
                            CONTACT
                    </button>
                </a>
        </div>
        
        </div>
        </div>
        </div>
        </>
    );

};
 
export default IndexMobile;
