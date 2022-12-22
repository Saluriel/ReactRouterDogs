import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from "./DogList"
import FilterDogs from './FilterDogs';

function allRoutes({ dogs }) {
    return (
        <Routes>
            <Route path="/dogs" element={<DogList dogs={dogs} />} />
            <Route path="/dogs/:name" element={<FilterDogs dogs={dogs} />} />
            <Route path="*" element={<Navigate to='/dogs' />} />
        </Routes>
    )
}

export default allRoutes;