import React from 'react';
import data  from "../data/slot_data.js";
import "../styles/build/userprofile.css"

function UserProfilePage({id, sortByName}){
    const [slots] = React.useState(data)
    return(
        <section className="UserProfile">
            {
                
                slots.map((induvidual)=>{
                    const {id ,name, age, desc, email, phone, image} = induvidual
                        if(name === sortByName){
                            return (<div key={id}>
                                        <article>
                                            <img src={image} alt="hghg"/>
                                            <h1>{name}</h1>
                                            <h2>{`Age: ${age}`}</h2>
                                            <p>{desc}</p>                                    
                                        </article>
                                        <footer>
                                            <h3>{email}</h3>
                                            <h3>{phone}</h3>
                                        </footer>
                                    </div>)}})
                        }
            
        </section>
    )
}


export default UserProfilePage