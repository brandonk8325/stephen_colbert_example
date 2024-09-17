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
                                WABASH WEBSITE
                        </HeaderLink>
                </div>
            </div>
        <div  style = {{minHeight: "80vh", backgroundColor: "#fff5e0", padding: "0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
        <div style = {{width: "80%"}}>
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>ABOUT</p>
            <img src = {require("../../static/stephen-headshot.jpg")} alt = "Main" width = "100%" style = {{aspectRatio: "2"}}/>
            <p style = {{textAlign: "left", fontSize: "30px"}}> Wabash Websites is a wonderful website design, development, and management company founded by students at New York University and the University of Illinois. Wabash Websites specializes in accessible websites for students and young people interested in creative careers.Our websites allow students to promote their past and upcoming work and creative projects, enabling them to reach employers, collaborators, and to find work in professional projects, easily and digitally. </p>
        </div>
        </div>
        </div>
      </div>
        </>
    );
};
 
export default Aboutmobile;