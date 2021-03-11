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
    strFacebook,
    strTwitter,
    strYoutube,
    strTeamBanner,
    strDescriptionEN,
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
          <img src={strTeamBanner} alt="" />
        </div>
      </div>
      <div className="details-part">
        <div className=" details-cart ">
          <div className="info-part">
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
          <div className="img-box ">
            {strGender === "Female" ? (
              <img src={femaleImg} />
            ) : (
              <img src={maleImg} />
            )}
          </div>
        </div>
        <div className="my-5 description-area">
          <p>{strStadiumDescription}</p>
          <br />
          <p>{strDescriptionEN}</p>
        </div>
      </div>
      <footer className="text-center">
        <a href={`https://${strFacebook}`} target="_blank">
          <i class="fab fa-facebook" style={{ color: "	#4267B2" }}></i>
        </a>
        <a href={`https://${strTwitter}`} target="_blank">
          <i class="fab fa-twitter" style={{ color: "white" }}></i>
        </a>
        <a href={`https://${strYoutube}`} target="_blank">
          <i class="fab fa-youtube" style={{ color: "red" }}></i>
        </a>
      </footer>
    </div>
  );
};

export default TeamDetails;
