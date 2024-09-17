import React from "react";
import Menu from "../../Components/Menu/menu";
import { HeaderLink } from "../../Components/Menu/MenuElements";
const Aboutmobile = () => {
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
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>ABOUT</p>
            <img src = {require("../../static/stephen-headshot.jpg")} alt = "Main" width = "100%" style = {{aspectRatio: "2"}}/>
            <p style = {{textAlign: "left", fontSize: "30px"}}> Stephen Colbert is an American actor and comedian known for his  work on <i>The Late Show With Stephen Colbert</i>. Stephen first gained notoriety as a correspondent for the Comedy Central satirical news program <i>The Daily Show</i>, where he portrayed the conservative character he later embellished in his program <i>The Colbert Report.</i>Stephen Colbert is an American actor and comedian known for his  work on <i>The Late Show With Stephen Colbert</i>. Stephen first gained notoriety as a correspondent for the Comedy Central satirical news program <i>The Daily Show</i>, where he portrayed the conservative character he later embellished in his program <i>The Colbert Report.</i></p>
        </div>
        </div>
        </div>
      </div>
        </>
    );
};
 
export default Aboutmobile;