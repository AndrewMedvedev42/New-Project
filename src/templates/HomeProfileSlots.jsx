import React from 'react';
import {Link} from "react-router-dom";
import data  from "../data/slot_data.js";
import "../styles/build/slots.css"

function HomeProfileSlots (){
    const [slots] = React.useState(data)

    function myFunction(){
        pay();
        cls();
    }

    function cls() {
        console.log("bye")
    }

    function pay() {
        localStorage.setItem('bgcolor', 'red')
    }

    return(
        <section>
            {slots.map((induvidual)=>{
            const {id ,name, age, litleDesc, image} = induvidual
                return (
                    <div className="slotCard" key={id}>
                        <img src={image} alt="logo"/>
                        <h1>{name}</h1>
                        <h3>Age: {age}</h3>
                        <p>{litleDesc}</p>
                        <Link to={`/${name}`}>
                            <button onClick={myFunction}>More...</button>
                        </Link>
                    </div>)})}
        </section>
)}


export default HomeProfileSlots