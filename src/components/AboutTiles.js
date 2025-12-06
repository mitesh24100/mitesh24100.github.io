import React, { useEffect } from "react";
import "../Styles/About_Tiles.css";
import LC from "../assets/LC_cnt.jpeg";
import tech from "../assets/teck.png";
import CloseIcon from "@mui/icons-material/Close";

function AboutTiles({ setButtonVisible }) {
  useEffect(() => {
    setTimeout(() => {
      var iconDiv = document.getElementById("red-icon-tiles");
      iconDiv.style.display = "flex";
    }, 2000);
  }, []);
  return (
    <>
      <div className="about-tiles-wrapper">
        <div
          className="red-icon-tiles"
          id="red-icon-tiles"
          onClick={() => setButtonVisible(true)}
          // style={{color: "black", fontFamily: "sans-serif"}}
        >
          {/* X */}
          {/* <CloseIcon fontSize="small" sx={{ color: "black", paddingLeft: "0.6px", paddingBottom: "0.2px" }} /> */}
          <CloseIcon fontSize="small" sx={{ color: "black", paddingLeft: "0.75px", paddingBottom: "0.2px" }} />
        </div>
        <ul className="tiles-ul" id="list">
          <li class="leaf">Software Engineer</li>
          <li class="leaf">
            <div className="leaf-flex">
              <p className="line-wrap-section" style={{ alignItems: "start" }}>
                NC State University
              </p>
              <p
                className="line-wrap-section"
                style={{ alignItems: "end", marginTop: "25px" }}
              >
                Master, CS
              </p>
            </div>
          </li>
          <li class="leaf">
            <div className="leaf-flex">
              <p className="line-wrap-section" style={{ alignItems: "start" }}>
                University of Mumbai
              </p>
              <p
                className="line-wrap-section"
                style={{ alignItems: "end", marginTop: "25px" }}
              >
                Bachelor, IT
              </p>
            </div>
          </li>
          <li class="leaf">
            <div className="leaf-flex">
              <p className="line-wrap-section" style={{ alignItems: "start" }}>
                Lifelong Learner
              </p>
              <p
                className="line-wrap-section"
                style={{ alignItems: "end", marginTop: "25px" }}
              >
                Problem Solver
              </p>
              
            </div>
          </li>
          <li class="leaf">
            <div className="leaf-flex">
              <p className="line-wrap-section" style={{ alignItems: "start" }}>
                Software Experience
              </p>
              <p
                className="line-wrap-section"
                style={{ alignItems: "end", marginTop: "25px" }}
              >
                Full Stack/Data
              </p>
            </div>
          </li>
          <li class="leaf">
            {/* <img src={MERN} style={{ width: '40%', marginRight: '5px', borderRadius: '5px' }} /> */}
            <img
              src={tech}
              style={{
                width: "96%",
                borderRadius: "5px",
                verticalAlign: "middle",
              }}
            />
            {/* <img src={AWS} style={{ width: '30%', borderRadius: '50%' }} /> */}
          </li>
          <li class="leaf">
            <img
              style={{
                width: "70%",
                borderRadius: "5px",
                verticalAlign: "middle",
              }}
              src={LC}
            />
          </li>
          {/* <li class="leaf">I'm list 8</li> */}
          {/* <li class="leaf">I'm list 9</li> */}
        </ul>
      </div>
    </>
  );
}

export default AboutTiles;
