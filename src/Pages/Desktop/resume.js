import {React, useState} from "react";
import {Document, Page, pdfjs } from "react-pdf";
import Headshot from "../../static/headshot.jpg";
import ResumePNG from "../../static/resumePNG.png";
import ResumePic from "../../static/Resume.pdf";

const Resume = ({height}) => {
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
        <div style={{backgroundColor: "#fff5e0", minHeight: "70vh", position: "relative"}}>
        <div style = {{display: "flex"}}>
            <div style={{  display:"grid", backgroundColor: "#fff5e0", paddingBottom: "50px", width: "50%", paddingRight: "1.5%"}}>
                <div style = {{ marginLeft: "auto", marginRight: "0"}}>
                    <div style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", paddingBottom: "10px"}}>
                        <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>HEADSHOT</p>
                    </div>
                    <div style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", paddingBottom: "10px"}}>
                        <a href = {Headshot} download = {"headshot.jpg"}>
                            <button type = "button"  role = "link" onMouseOver = {(event) => over(event)} onMouseOut = {(event) => out(event)} style = {{outline: "0", textAlign: "center", border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: "#f4e0b9", color: "000001", textDecoration: "none", display: "inline-block"}}> 
                                DOWNLOAD
                            </button>
                        </a>
                    </div>
                    <div style = {{display: "block"}}>
                        <img src = {Headshot} alt = "" width = "400px"/>
                    </div>
                </div>
            </div>
            
            <div style={{display:"grid",backgroundColor: "#fff5e0", paddingBottom: "50px",  width: "50%", paddingLeft: "1.5%"}}>
                <div style = {{marginRight: "auto", marginLeft: "0"}}>
                <div style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", paddingBottom: "10px"}}>
                        <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>RESUME</p>
                    </div>
                    <div style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", paddingBottom: "10px"}}>
                        <a href = {ResumePic} download = {"resume.pdf"}>
                            <button type = "button"  role = "link" onMouseOver = {(event) => over(event)} onMouseOut = {(event) => out(event)} style = {{outline: "0", textAlign: "center", border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: "#f4e0b9", color: "000001", textDecoration: "none", display: "inline-block"}}> 
                                DOWNLOAD
                            </button>
                        </a>
                    </div>
                    <div style = {{display: "flex"}}>
                        <img src = {ResumePNG} alt = "" width = "400px"/>
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