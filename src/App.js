import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {GameSelector} from './modules/pages/gameSelector' 
import {Rules}        from './modules/pages/rules'
import {GameBoard}    from "./modules/pages/gameBoard";

function App() {


  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/play'  component={GameBoard} />
          <Route exact path='/rules' component={Rules} />
          <Route  path='/' component={GameSelector} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

