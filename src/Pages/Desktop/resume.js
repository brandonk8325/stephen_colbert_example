import {React, useState} from "react";
import { bkgdClr, btnBkgd, clkBtn, hvrBtn, rsmeImg, hdsht, rsme } from "../../variables";


const Resume = ({height}) => {
    const over = event => {
        const el = event.target;
        el.style.backgroundColor = hvrBtn;
    };
    const out = event => {
        const el = event.target;
        el.style.backgroundColor = clkBtn;
    }

    return ( 
        <>
        <div style={{backgroundColor: bkgdClr, minHeight: "70vh", position: "relative"}}>
        <div style = {{display: "flex"}}>
            <div style={{  display:"grid", backgroundColor: bkgdClr, paddingBottom: "50px", width: "50%", paddingRight: "1.5%"}}>
                <div style = {{ marginLeft: "auto", marginRight: "0"}}>
                    <div style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", paddingBottom: "10px"}}>
                        <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>HEADSHOT</p>
                    </div>
                    <div style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", paddingBottom: "10px"}}>
                        <a href = {require("../../static/" + hdsht)} download = {"headshot.jpg"}>
                            <button type = "button"  role = "link" onMouseOver = {(event) => over(event)} onMouseOut = {(event) => out(event)} style = {{outline: "0", textAlign: "center", border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: btnBkgd, color: "000001", textDecoration: "none", display: "inline-block"}}> 
                                DOWNLOAD
                            </button>
                        </a>
                    </div>
                    <div style = {{display: "block"}}>
                        <img src = {require("../../static/" + hdsht)} alt = "" width = "400px"/>
                    </div>
                </div>
            </div>
            
            <div style={{display:"grid",backgroundColor: bkgdClr, paddingBottom: "50px",  width: "50%", paddingLeft: "1.5%"}}>
                <div style = {{marginRight: "auto", marginLeft: "0"}}>
                <div style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", paddingBottom: "10px"}}>
                        <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>RESUME</p>
                    </div>
                    <div style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", paddingBottom: "10px"}}>
                        <a href = {require("../../static/" + rsme)} download = {"resume.pdf"}>
                            <button type = "button"  role = "link" onMouseOver = {(event) => over(event)} onMouseOut = {(event) => out(event)} style = {{outline: "0", textAlign: "center", border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: btnBkgd, color: "000001", textDecoration: "none", display: "inline-block"}}> 
                                DOWNLOAD
                            </button>
                        </a>
                    </div>
                    <div style = {{display: "flex"}}>
                        <img src = {require("../../static/" + rsmeImg)} alt = "" width = "400px"/>
                    {/* <Document file = {ResumePic}>
                        <Page pageNumber={1} width = "400" renderAnnotationLayer={false} renderTextLayer={false}/>
                    </Document> */}
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        </>
    );

};
 
export default Resume;