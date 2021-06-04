import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

function TinderCards() {
  function swiped(direction, nameToDelete) {
    console.log("removing : " + nameToDelete);
  }
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/');
      setPeople(req.data);
    }
    fetchData();
  }, [])
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: "url(" + person.url + ")" }}
              className="card"
            >
            </div>
            <h2 className="tinderCard__h2">{person.name}</h2>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
