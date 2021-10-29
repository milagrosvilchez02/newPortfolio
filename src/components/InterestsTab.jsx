import React from "react";
import "../assets/styles/InterestsTab.css";

const InterestsTab = () => {
  return (
    <div className="inter-cont">
      <div className="inter-item">
        <img
          className="item-img"
          src="https://assets.unenvironment.org/s3fs-public/inline-images/Play_1_Photo_by_Pixahive.jpg?VersionId=null"
          alt="videogames"
        />
      </div>
      <div className="inter-item">
        <img
          className="item-img"
          src="https://i.blogs.es/8bd348/2560_3000/1366_2000.jpeg"
          alt="workout"
        />
      </div>
      <div className="inter-item">
        <img
          className="item-img"
          src="https://cdn.vox-cdn.com/thumbor/M223kCurGxrvURmDnsw4f1I0l1U=/0x0:5500x3671/920x613/filters:focal(2310x1396:3190x2276):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66563372/GettyImages_849177432.0.jpg"
          alt="cooking"
        />
      </div>
      <div className="inter-item"></div>
      <div className="inter-item"></div>
      <div className="inter-item"></div>
      <div className="inter-item"></div>
    </div>
  );
};

export default InterestsTab;
