import React from "react";
import Menu from "../../Components/Menu/menu";
import { HeaderLink } from "../../Components/Menu/MenuElements";
const Pricingmobile = () => {
    return (
        <>
        <div style = {{display: "grid", }}>
            <div style = {{display: "block", minHeight: "10vh", backgroundColor: "#fff5e0"}}>
                <div style = {{display: "flex", float: "right", paddingRight: "15%",  height: "0vh", paddingTop: "20px"}}>
                    <Menu />
                </div>
                <div style = {{display: "flex", float: "left", paddingLeft: "5%", justifyItems: "center", alignItems: "center", paddingTop: "3px"}}>   
                        <HeaderLink to="/" activeStyle>
                                WABASH WEBSITES
                        </HeaderLink>
                </div>
            </div>
        <div  style = {{minHeight: "80vh", backgroundColor: "#fff5e0", padding: "0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
        <div style = {{width: "80%"}}>
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>PRICING</p>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                <div style={{textAlign: "left"}}>
                    <h1>Wabash Websites and $8/month!
Plus the cost of a custom domain, usually $14/year
</h1>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
        </>
    );
};
 
export default Pricingmobile;