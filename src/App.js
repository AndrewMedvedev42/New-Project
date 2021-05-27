import  HomeProfileSlots  from "./templates/HomeProfileSlots";
import React, {useState} from 'react';
import data  from "./data/slot_data.js";
import UserProfilePage from "./templates/UserProfilePage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [slots, setSlots] = React.useState(data)
  return (
        slots.map((induvidual)=>{
        const {id ,name, age, desc} = induvidual
        return (
            <Router>
              <Switch>
                  <Route exact path="/">
                      <HomeProfileSlots id={id} name={name} age={age}/>
                  </Route>
                  <Route path={`/${name}`}>
                      <UserProfilePage id={id} name={name} age={age} desc={desc}/>
                      
                  </Route>
              </Switch>
          </Router>
            )
        })
    )
}

export default App;
