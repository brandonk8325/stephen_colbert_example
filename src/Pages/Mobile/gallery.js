import React from "react";
import Menu from "../../Components/Menu/menu";
import One from "../../static/Image_1.png"
import Two from "../../static/Image_2.png"
import Three from "../../static/Image_3.jpg"
import Four from "../../static/Image_4.jpg"
import Five from "../../static/Image_5.jpg"
import Six from "../../static/Image_6.jpg"
import { HeaderLink } from "../../Components/Menu/MenuElements";
const Gallerymobile = () => {
    return (
        <>
        <div style = {{display: "grid", }}>
            <div style = {{display: "block", minHeight: "10vh", backgroundColor: "#fff5e0"}}>
                <div style = {{display: "flex", float: "right", paddingRight: "15%",  height: "0vh", paddingTop: "20px"}}>
                    <Menu />
                </div>
                <div style = {{display: "flex", float: "left", paddingLeft: "5%", justifyItems: "center", alignItems: "center", paddingTop: "32px"}}>   
                        <HeaderLink to="/" activeStyle>
                                STEPHEN COLBERT
                        </HeaderLink>
                </div>
            </div>
        <div  style = {{minHeight: "80vh", backgroundColor: "#fff5e0", padding: "0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
        <div style = {{width: "80%"}}>
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>GALLERY</p>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                <div style = {{paddingBottom: "1.5%",  width: "100%", display: "grid"}}>
                    <div style = {{paddingBottom: "5%"}}>
                        <img style = {{aspectRatio: "1"}} width = "100%"  src = {One} alt = "1"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div>
                    <div style = {{ paddingBottom: "5%"}}>
                    <img width = "100%" style = {{aspectRatio: "1"}} src = {Two} alt = "2"/>
                    </div>
                    <div style = {{paddingBottom: "5%"}}>
                    <img width = "100%" style = {{aspectRatio: "1"}}src = {Three} alt = "3"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div>
                    <div style = {{paddingBottom: "5%"}}>
                    <img width = "100%" style = {{aspectRatio: "1"}}src = {Four} alt = "4"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div> 
                    <div style = {{ paddingBottom: "5%"}}>
                    <img width = "100%" style = {{aspectRatio: "1"}} src = {Five} alt = "5"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div>
                    <div style = {{}}>
                    <img width = "100%" style = {{aspectRatio: "1"}} src = {Six} alt = "6"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
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
 
export default Gallerymobile;