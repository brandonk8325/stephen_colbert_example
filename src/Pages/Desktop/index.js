import React from "react";
import { NavLink } from "react-router-dom";
import { name, jobs, bkgdClr, btnBkgd, hvrBtn, clkBtn, hmpgImg, rlseBtn } from "../../variables";

const Index = () => {

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

        <div style={{backgroundColor: bkgdClr, minHeight: "70vh", position: "relative"}}>
            <div style={{margin: "0", position: "relative",left: "50%", transform: "translate(-50%, 0)"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center",  width: "100%", backgroundColor: bkgdClr}}>
                <img src = {require("../../static/" + hmpgImg)} alt = "Main" width = "700vw"/>
            </div>
            <div style={{ alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: bkgdClr, textAlign: "center", position: "relative", top: "-20px", paddingBottom: "5px"}}>
                <h1>{name}</h1>
            </div>
            <div style={{ alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: bkgdClr, textAlign: "center", position: "relative", top: "-43px"}}>
                <h4>{jobs}
</h4>
            </div>
            <div style={{ alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: bkgdClr, textAlign: "center", position: "relative", top: "-50px", display: "flex"}}>
                <NavLink to = "/contact">
                    <button type = "button"  role = "link" onMouseOver = {(event) => over(event)} onMouseDown={(event) => click(event)} onMouseOut = {(event) => out(event)} style = {{fontSize: "30px", textAlign: "center", outline: "0", alignItems: "center",  border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: btnBkgd, color: "000001", textDecoration: "none", display: "inline-flex",  width: "180px"}}> 
                            CONTACT
                    </button>
                </NavLink>
            </div>
            </div>
        </div>
    );

};
 
export default Index;
