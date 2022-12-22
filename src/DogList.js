import React from "react";
import { Link } from "react-router-dom";
import { dogs } from "./App";

function DogList({ dogs }) {
    return (
        <div>
            <h1>HERES SOME DOGS</h1>
            <table>{dogs.map(dog => (
                <tr>
                    <td>
                        <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                    </td>
                </tr>
            )
            )}</table>
        </div>
    )
}




export default DogList;
