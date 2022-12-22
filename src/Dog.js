import React from 'react';
import { Link, Navigate, Route } from "react-router-dom"

function Dog({ dog }) {
    console.log(dog)
    if (!dog) return <Route path="*" element={<Navigate to='/dogs' />} />
    return (
        <div>
            <h2>{dog.name}</h2>
            <h3>THIS DOG IS OLD, {dog.age} WHOLE YEARS</h3>
            <h4>Here's some facts about {dog.name}</h4>
            <h5>{dog.facts.map(fact => (<li>{fact}</li>))}</h5>
            <Link to="/dogs">Back to home</Link>
        </div>
    )
}

export default Dog;