import React from "react";
import Menu from "../../Components/menu";
import Headshot from "../../static/headshot.jpg";
import ResumePNG from "../../static/resumePNG.png";
import ResumePic from "../../static/Resume.pdf";


const Resumemobile = () => {
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
        <div  style = {{minHeight: "75vh", backgroundColor: "#fff5e0", padding: "0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
        <div style = {{width: "80%"}}>
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>RESUME</p>
            <div style={{  display:"grid", backgroundColor: "#fff5e0", paddingBottom: "50px", width: "50%", paddingRight: "1.5%"}}>
            <div style = {{marginRight: "auto", marginLeft: "0"}}>
                    <div style = {{ display: "flex",  alignItems: "left", justifyContent: "left",paddingBottom: "10px"}}>
                        <a href = {ResumePic} download = {"resume.pdf"}>
                            <button type = "button"  role = "link" onMouseOver = {(event) => over(event)} onMouseOut = {(event) => out(event)} style = {{outline: "0", textAlign: "center", border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: "#f4e0b9", color: "000001", textDecoration: "none", display: "inline-block"}}> 
                                DOWNLOAD
                            </button>
                        </a>
                    </div>
                    <div style = {{display: "flex"}}>
                        <img src = {ResumePNG} alt = "" width = "100%"/>
                    {/* <Document file = {ResumePic}>
                        <Page pageNumber={1} width = "400" renderAnnotationLayer={false} renderTextLayer={false}/>
                    </Document> */}
                    </div>
                </div>
                <div style = {{ paddingTop: "50px", marginLeft: "auto", marginRight: "0"}}>
                <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>HEADSHOT</p>
                    <div style = {{ display: "flex",  alignItems: "center", justifyContent: "left", paddingBottom: "10px"}}>
                        <a href = {Headshot} download = {"headshot.jpg"}>
                            <button type = "button"  role = "link" onMouseOver = {(event) => over(event)} onMouseOut = {(event) => out(event)} style = {{outline: "0", textAlign: "center", border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: "#f4e0b9", color: "000001", textDecoration: "none", display: "inline-block"}}> 
                                DOWNLOAD
                            </button>
                        </a>
                    </div>
                    <div style = {{display: "block"}}>
                        <img src = {Headshot} alt = "" width = "100%"/>
                    </div>
                </div>
                
            </div>
        </div>
        
        </div>
      </div>
      </div>
        </>
    );
};
 
export default Resumemobile;