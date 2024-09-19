import React from "react";
import Menu from "../../Components/Menu/menu";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HeaderLink } from "../../Components/Menu/MenuElements";
import { bkgdClr, clkBtn, jobs, hmpgImg, hvrBtn, name, rlseBtn } from "../../variables";

const IndexMobile = () => {

    const over = event => {
        const el = event.target;
        el.style.backgroundColor = hvrBtn;
    };
    const out = event => {
        const el = event.target;
        el.style.backgroundColor = rlseBtn;
    }
    const click = event => {
        const el = event.target;
        el.style.backgroundColor = clkBtn;
    }

    return ( 
        
        <>
        <div style = {{display: "grid", }}>
            <div style = {{display: "block", minHeight: "10vh", backgroundColor: bkgdClr, paddingBottom: "10px"}}>
                <div style = {{display: "flex", float: "right", paddingRight: "15%",  height: "0vh", paddingTop: "20px"}}>
                    <Menu />
                </div>
                <div style = {{display: "flex", float: "left", paddingLeft: "5%", justifyItems: "center", alignItems: "center", paddingTop: "30px"}}>   
                        <HeaderLink to="/" activeStyle>
                                {name}
                        </HeaderLink>
                </div>
            </div>
      <div  style = {{minHeight: "80vh", backgroundColor: bkgdClr}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style = {{width: "80%", padding: "0", margin: "0"}}>
            <img src = {require("../../static/" + hmpgImg)} alt = "Main" width = "100%" />
                <p style = {{fontSize: "35px", padding: "0", margin: "0", fontWeight: "bold", paddingBottom: "10px"}}>{name}</p>
                <p style = {{padding: "0", margin: "0", fontSize: "25px", paddingBottom: "10px"}}>{jobs}</p>
                <div style = {{paddingBottom: "20px"}}>
                    <NavLink to = "/contact">
                        <button type = "button"  role = "link" onMouseOver = {(event) => over(event)} onMouseOut = {(event) => out(event)} onMouseDown={(event) => click(event)}  style = {{fontSize: "30px", color: "black", textAlign: "center", outline: "0", alignItems: "center",  border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: "#f4e0b9",  textDecoration: "none", display: "inline-flex", height: "60px", width: "180px"}}> 
                                CONTACT
                     </button>
                 </NavLink>
                </div>
        </div>
        
        </div>
        </div>
        </div>
        </>
    );

};
 
export default IndexMobile;