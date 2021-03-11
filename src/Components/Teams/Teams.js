import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Teams.css";
import { useHistory } from "react-router";

const Teams = (props) => {
  const { strTeam, strTeamBadge, idTeam } = props.teams;
  const history = useHistory();
  const handleClickDetail = (teamName) => {
    const url = `/team/${teamName}`;
    history.push(url);
  };
  return (
    <div className=" text-center  cart-box ">
      <div className="badge-img">
        <img src={strTeamBadge} alt="" />
      </div>
      <h3>{strTeam}</h3>
      <h5>Sports type: Football</h5>
      <button onClick={() => handleClickDetail(idTeam)}>
        Explore
        <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Teams;
