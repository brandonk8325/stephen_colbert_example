import { hexToRgb } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";


    
export default function Frame ({ssrc, swidth,  saspectRatio}) {
    
    // const container = useRef()
    // useEffect(() => {
    //     const frm = document.createElement('iframe')
    //     frm.src = src
    //     frm.width = width
    //     frm.height = height
    //     frm.scrolling = 'no'       
    //     container.current.appendChild(frm)
    // })
    

    return(
        <>
        <iframe style = {{aspectRatio: saspectRatio}}id = "frame" width={swidth}  src = {ssrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </>
    )
}