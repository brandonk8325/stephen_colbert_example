
import React from "react";
import Video1 from "../static/video_1.mp4";
import Video2 from "../static/video_2.mp4";
import Video3 from "../static/video_3.mp4";
import Video4 from "../static/video_4.mp4";
import Video5 from "../static/video_5.mp4";
import Video6 from "../static/video_6.mp4";
{/*import Image1 from "../static/Image_1.png";
import Image2 from "../static/Image_2.png";
import Image3 from "../static/Image_3.jpg";
import Image4 from "../static/Image_4.jpg";
import Image5 from "../static/Image_5.jpg";
import Image6 from "../static/Image_6.jpg";*/}

const Portfolio = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
            <div style = {{paddingTop: "1.5%", paddingBottom: "1.5%",  display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                <div style = {{paddingRight: "1.5%",paddingBottom: "1.5%", paddingTop: "1.5%", width: "50%"}}>
                    <div style = {{paddingLeft: "50%", width: "100%", paddingBottom: "10%"}}>
                        <video src = {Video1}  width = "50%" controls></video>
                    </div>
                    <div style = {{paddingLeft: "50%", width: "100%", paddingBottom: "10%"}}>
                        <video src = {Video2} width = "50%" controls></video>
                    </div>
                    <div style = {{paddingLeft: "50%", width: "100%"}}>
                        <video src = {Video3} width = "50%" controls></video>
                    </div>
                </div>
                <div style = {{paddingLeft: "1.5%", paddingBottom: "1.5%", paddingTop: "1.5%", width: "50%"}}>
                    <div style = {{paddingLeft: "0%", width: "100%", paddingBottom: "10%"}}>
                        <iframe width="50%" height = "300px" src="https://www.youtube.com/embed/oACoGd4AZwk?si=QXiAjXEsimE76lP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div> 
                    <div style = {{paddingLeft: "0%", width: "100%", paddingBottom: "10%"}}>
                        <iframe width="50%" height = "300px" src="https://www.youtube.com/embed/PcNRQKRJX1E?si=dbeBbMLv_h6_g5pj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div style = {{paddingLeft: "0%", width: "100%"}}>
                        <iframe width="50%" height = "300px" src="https://www.youtube.com/embed/kmAKZFPpbOU?si=OnomRpAFOu03qUW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                {/* <div style = {{paddingBottom: "1.5%", paddingTop: "1.5%"}}>
                    <div style = {{paddingLeft: "20%", paddingRight: "1.5%"}}>
                        <video src = {Video5} width = "28.5%" controls></video>
                    </div>
                    <div style = {{paddingLeft: "1.5%", paddingRight: "20%"}}>
                        <video src = {Video6} width = "28.5%" controls></video>
                    </div>
                </div>*/}


            </div>
        </div>

    );
};
 
export default Portfolio;