import React from 'react';
import data  from "./data/slot_data.js";
import UserProfilePage from "./templates/UserProfilePage";
import  HomeProfileSlots  from "./templates/HomeProfileSlots";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [slots] = React.useState(data)
  return (
            <Router>
              <Switch>
                  {
                    slots.map((induvidual)=>{
                      const {id, name} = induvidual
                          return (
                            <Route path={`/${name}`}>
                              <UserProfilePage id={id} sortByName={name}/>
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
