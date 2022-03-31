import React, { useState } from "react";
import "./Gallery.css";

export default function Gallery(props) {
  return (
      <>
    <div className="main">
    <img
        src="https://images.unsplash.com/photo-1544785316-6e58aed68a50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
    <div className="main-text">
        <p><b>WELCOME </b>TO THE GALLERY</p>
    </div>
</div>
<div className="gallery">
    <div className="row">
        <div className="col">
            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                <div className="text"><b>Nobody</b> Cares</div>
            </div>
            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2x1YnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                <div className="text"><b>Nobody</b> Cares</div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1599827552599-eadf5fb3c75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                <div className="text"><b>Nobody</b> Cares</div>
            </div>
            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1564736676781-d0f57b29f67a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                <div className="text"><b>Nobody</b> Cares</div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1533619043865-1c2e2f32ff2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsdWJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                <div className="text"><b>Nobody</b> Cares</div>
            </div>
            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1542327841-94d8d2d79c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MjQzMjY0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                <div className="text"><b>Nobody</b> Cares</div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1530014671970-707f86eb10f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw0MjQzMjY0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                <div className="text"><b>Nobody</b> Cares</div>
            </div>
            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1504704911898-68304a7d2807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDI0MzI2NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
                <div className="text"><b>Nobody</b> Cares</div>
            </div>
        </div>
    </div>
</div>
</>
  );
}
