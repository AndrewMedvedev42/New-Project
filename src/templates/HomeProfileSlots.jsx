import React, {useState} from 'react';
import {Link} from "react-router-dom";
import data  from "../data/slot_data.js";

function HomeProfileSlots (){
    const [slots, setSlots] = React.useState(data)
    return(
        <section>
            {slots.map((induvidual)=>{
            const {id ,name, age, desc} = induvidual
                return (
                    <div key={id} className="item">
                        <h1>{name}</h1>
                        <h3>{age}</h3>
                        <Link to={`/${id}`}>
                            <button>More...</button>
                        </Link>
                    </div>)})}
        </section>
)}


export default HomeProfileSlots