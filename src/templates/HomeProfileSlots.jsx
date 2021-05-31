import React from 'react';
import {Link} from "react-router-dom";
import data  from "../data/slot_data.js";

function HomeProfileSlots (){
    const [slots] = React.useState(data)
    return(
        <section>
            {slots.map((induvidual)=>{
            const {id ,name, age} = induvidual
                return (
                    <div key={id}>
                        <h1>{name}</h1>
                        <h3>{age}</h3>
                        <Link to={`/${name}`}>
                            <button>More...</button>
                        </Link>
                    </div>)})}
        </section>
)}


export default HomeProfileSlots