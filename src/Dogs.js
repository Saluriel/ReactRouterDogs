import React from 'react';

function Dogs({ dogs }) {
    console.log(dogs)
    return (
        <div>
            {dogs.map(dog => (
                <div>{dog.name}</div>
            ))
            }
        </div>
    )
}

export default Dogs;

