import React from "react";
import Menu from "../../Components/menu";
const Contactmobile = () => {
    return (
        <>
        <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "0vh", width: "100%", backgroundColor: "#fff5e0", padding: "0px", paddingTop: "30px"}}>
            <div style = {{paddingLeft: "calc(50vw - 3rem  + 100px)"}}>
                <Menu />
            </div>
        </div>
        <div  style = {{minHeight: "75vh", backgroundColor: "#fff5e0", padding: "0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
        <div style = {{width: "80%"}}>
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>CONTACT</p>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                <div style={{textAlign: "left", width: "500px"}}>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>EMAIL</p>
                    <p style = {{fontSize: "20px"}}>email@email.com</p>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>PHONE NUMBER</p>
                    <p style = {{fontSize: "20px"}}>(777)-777-7777</p>
                </div>
            </div>
        </div>
        
        </div>
      </div>
        </>
    );
};
 
export default Contactmobile;