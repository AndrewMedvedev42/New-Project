import  HomeProfileSlots  from "./templates/HomeProfileSlots";
import React, {useState} from 'react';
import data  from "./data/slot_data.js";

function App() {

  const [slots, setSlots] = React.useState(data)

  return (
    <section>{
        slots.map((induvidual)=>{
              const {id, name, age,image, desc} = induvidual

            return (
              <div key={id} className="item">
                <HomeProfileSlots name={name} age={age} desc={desc} image={image}/>
              </div>
            )
            })
          }
    </section>)
}

export default App;
