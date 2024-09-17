import React from "react";
import Image from "../../static/pointing.png";
const Faq = () => {
    return (
        <>
        <div style={{backgroundColor: "#fff5e0", minHeight: "70vh"}}>
        <div style={{ alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0", display: "block"}}>
            <div style = {{display:"flex",  alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: "#fff5e0"}}>
                <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>FREQUENTLY ASKED QUESTIONS</p>
            </div>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                <div style={{textAlign: "center", width: "500px"}}>
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
        </>
    );
};
 
export default Faq;