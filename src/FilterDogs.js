import React from "react";
import { Link, useParams } from "react-router-dom";
import Dog from "./Dog"

function FilterDogs({ dogs }) {
    const { name } = useParams();

    if (name) {
        const currentDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase())
        return <Dog dog={currentDog} />
    }
    return null;
}

export default FilterDogs;