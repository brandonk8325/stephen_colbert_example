import React from "react";
import Image from "../../static/pointing.png";
const Pricing = () => {
    return (
        <>
        <div style={{backgroundColor: "#fff5e0", minHeight: "70vh"}}>
        <div style={{ alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0", display: "block"}}>
            <div style = {{display:"flex",  alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: "#fff5e0"}}>
                <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>PRICING</p>
            </div>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                <div style={{textAlign: "center", width: "500px"}}>
                    <h1>Wabash Websites and $8/month!
Plus the cost of a custom domain, usually $14/year
</h1>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};
 
export default Pricing;