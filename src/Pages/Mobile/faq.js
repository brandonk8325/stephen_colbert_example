import React from "react";
import Menu from "../../Components/Menu/menu";
import { HeaderLink } from "../../Components/Menu/MenuElements";
const Faqmobile = () => {
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
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>FREQUENTLY ASKED QUESTIONS</p>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                <div style={{textAlign: "left"}}>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>How do I update my website?</p>
                    <p style = {{fontSize: "20px"}}>Ask.</p>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>What if I do not already own a website domain?</p>
                    <p style = {{fontSize: "20px"}}>Buy it.</p>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>What if I do already own a website domain? </p>
                    <p style = {{fontSize: "20px"}}>Use it.</p>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>How long does it take to build my Wabash Website?</p>
                    <p style = {{fontSize: "20px"}}>A bit.</p>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>I have a specialty not listed. Can I still purchase a personalized Wabash Website? </p>
                    <p style = {{fontSize: "20px"}}>Yes.</p>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>How do I pay for my Wabash Website?</p>
                    <p style = {{fontSize: "20px"}}>$.</p>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>Can I own multiple Wabash Websites?</p>
                    <p style = {{fontSize: "20px"}}>Yes.</p>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>Can I give a Wabash Website as a gift?</p>
                    <p style = {{fontSize: "20px"}}>Yes.</p>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>Can I add links to music streaming platforms to my Wabash Website? </p>
                    <p style = {{fontSize: "20px"}}>Yes.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
        </>
    );
};
 
export default Faqmobile;