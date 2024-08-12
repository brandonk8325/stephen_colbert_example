import {React, useState} from "react";
import {Document, Page, pdfjs } from "react-pdf";
import Image from "../static/headshot.jpg";
import ResumePic from "../static/Resume.pdf";

const Resume = ({height}) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
    const [showImage, setShowImage] = useState(false)
    const [showDocument, setShowDocument] = useState(true)
    const [displayVal, setDisplayVal] = useState("flex");
    const onImageClick = () => {
        setDisplayVal("none");
        setShowDocument(false);
        setShowImage(true);
    }
    const onDocumentClick = () => {
        setShowImage(false);
        setShowDocument(true);
        setDisplayVal("flex");
    }
    return ( 
        <>
        <div style={{backgroundColor: "#fff5e0", minHeight: "70vh", position: "relative"}}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0", paddingBottom: "50px"}}>
            <div style = {{paddingRight: "50px"}}>
                <button type = "button" onClick = {onDocumentClick} style = {{outline: "0", textAlign: "center", border: "none", padding: "7px 16px", minWidth: "300px", borderRadius: "4px", backgroundColor: "#f4e0b9", color: "000001", textDecoration: "none", display: "inline-block"}}> RESUME PDF </button>
            </div>
            <div style = {{paddingLeft: "50px"}}>
                <button type = "button" onClick = {onImageClick} style = {{outline: "0", textAlign: "center", border: "none", padding: "7px 16px",  minWidth: "300px", borderRadius: "4px", backgroundColor: "#f4e0b9", color: "000001", textDecoration: "none", display: "inline-block"}}> HEADSHOT JPG </button>
            </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0", paddingBottom: "50px"}}>
            <div style = {{paddingTop: "0"}}>
                <a href = {showDocument ? ResumePic : Image} download = {showDocument ? "resume.pdf" : "headshot.jpg"}>
                    <button type = "button"  role = "link" style = {{outline: "0", textAlign: "center", border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: "#f4e0b9", color: "000001", textDecoration: "none", display: "inline-block"}}> 
                        DOWNLOAD
                    </button>
                </a>
            </div>
        </div>
        {showImage ? 
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0", paddingBottom: "50px"}}>
                <img src = {Image} alt = "" width = "400px"/>
            </div>
        : null}

        <div style = {{display: displayVal}}> 
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0", paddingBottom: "50px"}}>
                <Document file = {ResumePic}>
                    <Page pageNumber={1} width = "400" renderAnnotationLayer={false} renderTextLayer={false}/>
                </Document>
            </div>
        </div>
        </div>
        </>
    );

};
 
export default Resume;