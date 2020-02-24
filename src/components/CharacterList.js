import React, { useEffect, useState } from "react";
import axios from axios;
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

        //adding API requests
        axios
        .get('https://rick-api.herokuapp.com/api/')

        .then(response => {
          setCharacter(response.data.results)
          //Checking console
          console.log(response.data.results)
        })
        .catch(error => {
          //write to console that there was an error;
          console.log('Server Error', error)
        })

      }, []);

      return (
        <div className="CharacterCard">
        {character.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
        </div>
      );
    }
