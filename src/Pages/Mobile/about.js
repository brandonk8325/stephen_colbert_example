import React from "react";
import Menu from "../../Components/menu";
const Aboutmobile = () => {
    return (
        <>
        <div style = {{display: "grid", }}>
            <div style = {{display: "block", paddingBottom: "40px", backgroundColor: "#fff5e0"}}>
                <div style = {{display: "flex", float: "left", paddingLeft: "10%", backgroundColor: "green", height: "0vh"}}>
                    <Menu />
                </div>
                <div style = {{display: "flex", float: "right", paddingRight: "10%"}}>   
                    <p style = {{fontSize: "30px", margin: "0"}}>STEPHEN COLBERT</p>
                </div>
            </div>
        <div  style = {{minHeight: "75vh", backgroundColor: "#fff5e0", padding: "0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
        <div style = {{width: "80%"}}>
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>ABOUT</p>
            <img src = {require("../../static/stephen-headshot.jpg")} alt = "Main" width = "100%" height = "200px"/>
            <p style = {{textAlign: "left", fontSize: "30px"}}> Stephen Colbert is an American actor and comedian known for his  work on <i>The Late Show With Stephen Colbert</i>. Stephen first gained notoriety as a correspondent for the Comedy Central satirical news program <i>The Daily Show</i>, where he portrayed the conservative character he later embellished in his program <i>The Colbert Report.</i>Stephen Colbert is an American actor and comedian known for his  work on <i>The Late Show With Stephen Colbert</i>. Stephen first gained notoriety as a correspondent for the Comedy Central satirical news program <i>The Daily Show</i>, where he portrayed the conservative character he later embellished in his program <i>The Colbert Report.</i></p>
        </div>
        </div>
        </div>
      </div>
        </>
    );
};
 
export default Aboutmobile;