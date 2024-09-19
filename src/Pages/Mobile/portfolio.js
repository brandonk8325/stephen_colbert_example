import React from "react";
import Menu from "../../Components/Menu/menu";
import { HeaderLink } from "../../Components/Menu/MenuElements";
import Frame from "../../Components/iframe";
import { bkgdClr, link, name } from "../../variables";

const Portfoliomobile = () => {
    return (
        <>
        <div style = {{display: "grid", }}>
            <div style = {{display: "block", minHeight: "10vh", backgroundColor: bkgdClr}}>
                <div style = {{display: "flex", float: "right", paddingRight: "15%",  height: "0vh", paddingTop: "20px"}}>
                    <Menu />
                </div>
                <div style = {{display: "flex", float: "left", paddingLeft: "5%", justifyItems: "center", alignItems: "center", paddingTop: "30px"}}>   
                        <HeaderLink to="/" activeStyle>
                                {name}
                        </HeaderLink>
                </div>
            </div>
        <div  style = {{minHeight: "80vh", backgroundColor: bkgdClr, padding: "0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
        <div style = {{width: "80%"}}>
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>PORTFOLIO</p>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: bkgdClr}}>
                <div style = {{paddingBottom: "1.5%",  width: "100%", display: "grid"}}>
                    <div style = {{paddingBottom: "5%"}}>
                    <Frame ssrc= {link} swidth = "100%" saspectRatio = "560/315"/>
                        {/*<iframe style = {{aspectRatio: "560/315"}}width="100%" loading = "lazy" src="https://www.youtube.com/embed/oACoGd4AZwk?si=QXiAjXEsimE76lP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>*/}
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div>
                    <div style = {{ paddingBottom: "5%"}}>
                    <Frame ssrc= {link} swidth = "100%" saspectRatio = "560/315"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center",padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div>
                    <div style = {{paddingBottom: "5%"}}>
                    <Frame ssrc= {link} swidth = "100%" saspectRatio = "560/315"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div>
                    <div style = {{paddingBottom: "5%"}}>
                    <Frame ssrc= {link} swidth = "100%" saspectRatio = "560/315"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div> 
                    <div style = {{ paddingBottom: "5%"}}>
                    <Frame ssrc= {link} swidth = "30%" saspectRatio = "560/315"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div>
                    <div style = {{}}>
                    <Frame ssrc= {link} swidth = "100%" saspectRatio = "560/315"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div>
                </div>
                </div>    
        </div>
        </div>
        </div>
      </div>
        </>
    );
};
 
export default Portfoliomobile;