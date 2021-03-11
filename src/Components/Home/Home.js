import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Teams from "../Teams/Teams";
import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <div className="container-part">
      <Header></Header>
      <div className="main-section">
        <div className="display-cart">
          {teams.map((team) => (
            <Teams teams={team}></Teams>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
