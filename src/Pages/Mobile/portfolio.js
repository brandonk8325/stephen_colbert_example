import React from "react";
import Menu from "../../Components/menu";
const Portfoliomobile = () => {
    return (
        <>
        <div style = {{display: "grid", }}>
            <div style = {{display: "block", paddingBottom: "40px", backgroundColor: "#fff5e0"}}>
                <div style = {{display: "flex", float: "left", paddingLeft: "5%",  height: "0vh"}}>
                    <Menu />
                </div>
                <div style = {{display: "flex", float: "right", paddingRight: "5%"}}>   
                    <p style = {{fontSize: "30px", margin: "0"}}>STEPHEN COLBERT</p>
                </div>
            </div>
        <div  style = {{minHeight: "75vh", backgroundColor: "#fff5e0", padding: "0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
        <div style = {{width: "80%"}}>
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>PORTFOLIO</p>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                <div style = {{paddingBottom: "1.5%",  width: "100%", display: "grid"}}>
                    <div style = {{paddingBottom: "5%"}}>
                        <iframe width="100%" height = "300px" src="https://www.youtube.com/embed/oACoGd4AZwk?si=QXiAjXEsimE76lP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div>
                    <div style = {{ paddingBottom: "5%"}}>
                        <iframe width="100%" height = "300px" src="https://www.youtube.com/embed/oACoGd4AZwk?si=QXiAjXEsimE76lP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center",padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div>
                    <div style = {{paddingBottom: "5%"}}>
                        <iframe width="100%" height = "300px" src="https://www.youtube.com/embed/oACoGd4AZwk?si=QXiAjXEsimE76lP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div>
                    <div style = {{paddingBottom: "5%"}}>
                        <iframe width="100%" height = "300px" src="https://www.youtube.com/embed/oACoGd4AZwk?si=QXiAjXEsimE76lP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div> 
                    <div style = {{ paddingBottom: "5%"}}>
                        <iframe width="100%" height = "300px" src="https://www.youtube.com/embed/PcNRQKRJX1E?si=dbeBbMLv_h6_g5pj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>Caption!</h4>
                    </div>
                    <div style = {{}}>
                        <iframe width="100%" height = "300px" src="https://www.youtube.com/embed/kmAKZFPpbOU?si=OnomRpAFOu03qUW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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