import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard"
import axios from 'axios';
import styled from "styled-components";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

        //adding API requests
        axios
        .get('https://rickandmortyapi.com/api/character/')

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
