import React, {useState} from 'react';
import {Link} from "react-router-dom";

function HomeProfileSlots ({id, name, age, desc}){
    console.log(`Name: ${name}, Their ID: ${id}`);
    return(
        <div key={id} className="item">
            <h1>{name}</h1>
            <h3>{age}</h3>
            <Link to={`/${name}`}>
                <button>More...</button>
            </Link>
        </div>)}

export default HomeProfileSlots