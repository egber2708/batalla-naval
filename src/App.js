import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {GameSelector} from "./modules/pages/gameSelector";
import {Rules} from "./modules/pages/rules";
import {GameBoard} from "./modules/pages/gameBoard";
import {Navbar} from "./modules/components/generals/navbar";

function App() {
  const [level, setLevel] = useState(100);
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/play' render={(props) => <GameBoard {...props} level={level} />} />
          <Route exact path='/rules' component={Rules} />
          <Route path='/' render={(props) => <GameSelector {...props} setLevel={setLevel} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
