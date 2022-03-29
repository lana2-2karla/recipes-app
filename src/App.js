import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Details from './pages/Details';
import InProgressRecipes from './pages/InProgressRecipes';
import DoneRecipes from './pages/DoneRecipes';
import Favorites from './pages/Favorites';
import Explore from './pages/Explore';
import DrinksExplored from './pages/DrinksExplored';
import FoodsExplored from './pages/FoodsExplored';
import IngredientsExplored from './pages/IngredientsExplored';
import NationalitiesExplored from './pages/NationalitiesExplored';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// import rockGlass from './images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ Recipes } />
      <Route path="/details" component={ Details } />
      <Route
        path={ `/foods/${id}/in-progress` }
        render={ (props) => (<InProgressRecipes { ...props } />) }
      />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorites" component={ Favorites } />
      <Route path="/explore" component={ Explore } />
      <Route path="/explore/drinks" component={ DrinksExplored } />
      <Route path="/explore/foods" component={ FoodsExplored } />
      <Route path="/explore/foods/ingredients" component={ IngredientsExplored } />
      <Route path="/explore/foods/nationalities" component={ NationalitiesExplored } />
      <Route path="/profile" component={ Profile } />
      <Route path="*" component={ NotFound } />
    </Switch>
    // <div className="meals">
    //   <span className="logo">TRYBE</span>
    //   <object
    //     className="rocksGlass"
    //     type="image/svg+xml"
    //     data={ rockGlass }
    //   >
    //     Glass
    //   </object>
    // </div>
  );
}

export default App;
