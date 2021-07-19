
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import style from './App.module.css';

import Character from "./page/character";
import Episode from "./page/episode";
import DetailsCharacter from "./components/detailsCharacter";

import Menu from './components/menu';
import Title from './components/title';

function App() {
  
  return (
    <div className={style.contenedor}> 
      <Router>
        <Menu />
        <Title title="Rick and Morty"/>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/character" />
          </Route>
          <Route path="/character">
            <Character />
          </Route>
          <Route path="/episode">
            <Episode />
          </Route>
          <Route path="/detailsCharacter/:id">
            <DetailsCharacter />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
