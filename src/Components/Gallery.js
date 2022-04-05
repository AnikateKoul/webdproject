import React, { useState } from "react";
import "./Gallery.css";

export default function Gallery(props) {
  return (
      <>
      {/* This is the main gallery page */}
      <div style={{marginTop: "70px"}}></div>
    <div className="main3">
       
        
        <img src="https://www.seymourhotels.com/media/4301/greenhills_bonfire.jpg?width=900&height=597&mode=crop"/>
    <div className="main3-galleryText">
        <p><b>WELCOME </b>TO THE GALLERY</p>
    </div>
</div>
<div className="gallery">
        <div className="galleryCol">
        <img src="https://media.istockphoto.com/photos/shimla-sunrise-picture-id1268291636?k=20&m=1268291636&s=612x612&w=0&h=cpC3e8LkCYJEsbB3n5QOwH-iqUUCVwtk82WmQpfyUTs=" alt=""/>
        <img src="https://images.unsplash.com/photo-1605015239078-95f963a8b35c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80" alt=""/>
        <img src="https://c4.wallpaperflare.com/wallpaper/366/16/33/waterfall-photography-india-nature-wallpaper-preview.jpg" alt=""/>
        <img src="https://images.unsplash.com/photo-1579873143080-1b34d281f6e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" />
        <img src="https://moosenetwork.com/wp-content/uploads/2020/09/SASQ-HIGH-1-Tofino-beach-campfire-night.jpg" alt="" /> 
        {/* <img src="https://images.unsplash.com/photo-1569918970203-ea053ffda098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" /> */}
        </div>
        <div className="galleryCol">
            <img src="https://images.unsplash.com/photo-1590765759804-0b2b579820b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b290eXxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
            <img src="https://media.istockphoto.com/photos/young-woman-makes-heart-shape-finger-frame-to-spectacular-picture-id611318508?b=1&k=20&m=611318508&s=170667a&w=0&h=00PcfzxiBJ1jEmU6ZWCG_Qoyyn2s70dyqg1uWcjHyoc=" alt=""/>
            <img src="https://images.unsplash.com/photo-1586612438666-ffd0ae97ad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>   
            <img src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt=""/>  
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=700&h=500&s=1" alt="" />
            <img src="https://www.hlimg.com/images/stories/738X538/calangute%20(2)_1503395063s11.jpg" alt="" />
        </div>
        <div className="galleryCol">
            <img src="https://images.unsplash.com/photo-1588084603723-41322210d44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt=""/>
            <img src="https://images.unsplash.com/photo-1484766280341-87861644c80d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt=""/>
            <img src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80" alt=""/>       
            <img src="https://ak.jogurucdn.com/media/image/p15/media_gallery-2015-11-17-9-huffingtonpost_2810286b5dffc7644c77b01575264e67.jpg" alt="" />
        </div>
        <div className="galleryCol">
            <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/waterfalls-in-ooty_20th-Feb.jpg" alt=""/>
            <img src="https://images.unsplash.com/photo-1556438549-168b3e11c0a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
            <img src="https://images.unsplash.com/photo-1589868033293-a721123d31ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt=""/>     
            <img src="https://downloader.la/temp/[Downloader.la]-624ad28c6ab96.jpg" alt="" />
            <img src="https://i0.wp.com/triparambh.com/wp-content/uploads/2019/06/BB.jpg?fit=640%2C480&ssl=1" alt="" />
            {/* <img src="https://i.pinimg.com/originals/40/4f/20/404f20864c97713bbdf7a97d99e5fdb4.jpg" alt=""/> */}
        </div>
        
    </div>
</>
  );
}
