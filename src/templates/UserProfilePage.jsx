import React from 'react';
import data  from "../data/slot_data.js";

function UserProfilePage({id, sortByName}){
    const [slots] = React.useState(data)
    return(
        <section>
            {
                slots.map((induvidual)=>{
                    const {id ,name, age, desc, hobies, email, phone} = induvidual
                        if(name === sortByName){
                            return (<div key={id}>
                                        <article>
                                            <h1>{name}</h1>
                                            <h2>{`Age: ${age}`}</h2>
                                            <p>{desc}</p>                                       
                                        </article>
                                        <article>
                                            <h2>Hobies</h2>
                                            <p key={hobies.first}>{hobies.first}</p>
                                            <p key={hobies.second}>{hobies.second}</p>
                                            <p key={hobies.third}>{hobies.third}</p>
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