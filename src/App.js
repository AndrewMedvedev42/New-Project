import  HomeProfileSlots  from "./templates/HomeProfileSlots";
import React from 'react';
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
            <Router>
              <Switch>
                  {
                    slots.map((induvidual)=>{
                      const {id} = induvidual
                          return (
                            <Route path={`/${id}`}>
                              <UserProfilePage id={id}/>
                            </Route>
                          )})
                  }
                  <Route path="/">
                      <HomeProfileSlots/>
                  </Route>
              </Switch>
          </Router>
        )
}



export default App;
