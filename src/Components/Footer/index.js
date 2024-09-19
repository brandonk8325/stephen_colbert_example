
import React from "react";
import { Footer, FooterMenu } from "./FooterElements";
import Instagram from "../../static/instagram.svg";
import Facebook from "../../static/Facebook.svg";
import Twitter from "../../static/Twitter.svg";
import Youtube from "../../static/Youtube.svg";
import { bkgdClr, yt, tw, fb, ig } from "../../variables";
const FooterBar = () => {
    return (
        <>
            <Footer style={{backgroundColor: bkgdClr,  display: 'flex', alignItems: 'center',justifyContent: 'center', height: `10vh`}}>
                <FooterMenu >

                    <a href = {ig}><img src = {Instagram} alt = "" height = "30vh" style = {{paddingLeft: "2vh", paddingRight: "2vh", filter: "invert(14%) sepia(51%) saturate(1830%) hue-rotate(213deg) brightness(92%) contrast(99%)"}}/></a>
                    <a href = {fb}><img src = {Facebook} alt = "" height = "30vh"  style = {{paddingLeft: "2vh", paddingRight: "2vh", filter: "invert(14%) sepia(51%) saturate(1830%) hue-rotate(213deg) brightness(92%) contrast(99%)"}}/></a>
                    <a href = {tw}><img src = {Twitter} alt = "" height = "30vh"  style = {{paddingLeft: "2vh", paddingRight: "2vh", filter: "invert(14%) sepia(51%) saturate(1830%) hue-rotate(213deg) brightness(92%) contrast(99%)"}}/></a>
                    <a href = {yt}><img src = {Youtube} alt = "" height = "30vh"  style = {{paddingLeft: "2vh", paddingRight: "2vh", filter: "invert(14%) sepia(51%) saturate(1830%) hue-rotate(213deg) brightness(92%) contrast(99%)"}}/></a>
                </FooterMenu>
            </Footer>
        </>
    );
};
 

export default FooterBar;