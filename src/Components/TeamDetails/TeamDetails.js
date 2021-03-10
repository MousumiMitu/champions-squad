import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import maleImg from "./images/male.png";
import femaleImg from "./images/female.png";

import {
  faMapMarkerAlt,
  faFlag,
  faFutbol,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import "./TeamDetails.css";

const TeamDetails = () => {
  const { teamName } = useParams();
  const [details, setDetails] = useState([]);
  const {
    strGender,
    strTeamBadge,
    strTeam,
    strCountry,
    strSport,
    intFormedYear,
    strStadiumDescription,
  } = details;

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.teams[0]));
  }, []);

  return (
    <div style={{ background: "rgb(3, 18, 59)" }}>
      <div className="details-box">
        <div className="logo-box">
          <img src={strTeamBadge} alt="" />
        </div>
      </div>
      <div className="details-part">
        <div className="row details-cart ">
          <div className="col-md-6">
            <h3>{strTeam}</h3>
            <h5>
              <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />
              Founded: {intFormedYear}
            </h5>
            <h5>
              <FontAwesomeIcon className="me-2" icon={faFlag} />
              Country: {strCountry}
            </h5>
            <h5>
              <FontAwesomeIcon className="me-2" icon={faFutbol} />
              Sport type: {strSport}
            </h5>
            <h5>
              <FontAwesomeIcon className="me-2" icon={faMars} />
              Gender: {strGender}
            </h5>
          </div>
          <div className="col-md-6 img-box ">
            {strGender === "Male" ? (
              <img src={maleImg} />
            ) : (
              <img src={femaleImg} />
            )}
          </div>
        </div>
        <div className="my-5">
          <p>{strStadiumDescription}</p>
        </div>
      </div>
      <footer className="text-center">
        <a href="https://www.facebook.com/" target="_blank">
          <i class="fab fa-facebook" style={{ color: "	#4267B2" }}></i>
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank">
          <i class="fab fa-twitter" style={{ color: "white" }}></i>
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <i class="fab fa-youtube" style={{ color: "red" }}></i>
        </a>
      </footer>
    </div>
  );
};

export default TeamDetails;
