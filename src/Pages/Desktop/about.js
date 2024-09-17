import React from "react";
const About = () => {
    return (
        <>

        <div style={{backgroundColor: "#fff5e0", minHeight: "70vh"}}>
        <div style={{ alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0", display: "block"}}>
            <div style = {{display:"flex",  alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: "#fff5e0"}}>
                <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>ABOUT</p>
            </div>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                <div style={{textAlign: "center", width: "500px"}}>
                    <div>
                        <img style = {{float: "right", paddingLeft: "13px", paddingTop: "30px", margin: "0", paddingRight: "15px"}} src = {require("../../static/stephen-headshot.jpg")} alt = "Headshot" width = "275px"/>
                    </div>
                    <p style = {{textAlign: "left", fontSize: "20px"}}> Wabash Websites is a wonderful website design, development, and management company founded by students at New York University and the University of Illinois. Wabash Websites specializes in accessible websites for students and young people interested in creative careers.Our websites allow students to promote their past and upcoming work and creative projects, enabling them to reach employers, collaborators, and to find work in professional projects, easily and digitally. </p>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};
 
export default About;