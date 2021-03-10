import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  } = details;

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.teams[0]));
  }, []);

  return (
    <div>
      <div className="details-box">
        <div className="logo-box">
          <img src={strTeamBadge} alt="" />
        </div>
      </div>
      <div className="details-part">
        <div>
          <div>
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
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
