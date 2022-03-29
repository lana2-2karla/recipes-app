import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import DetailsFoods from './pages/DetailsFoods';
import DetailsDrinks from './pages/DetailsDrinks';
import InProgressRecipes from './pages/InProgressRecipes';
import DoneRecipes from './pages/DoneRecipes';
import Favorites from './pages/Favorites';
import Explore from './pages/Explore';
import DrinksExplored from './pages/DrinksExplored';
import FoodsExplored from './pages/FoodsExplored';
import IngredientsExploredFoods from './pages/IngredientsExploredFoods';
import IngredientsExploredDrinks from './pages/IngredientsExploredDrinks';
import NationalitiesExplored from './pages/NationalitiesExplored';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// import rockGlass from './images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ Foods } />
      <Route path="/drinks" component={ Drinks } />
      <Route
        path='/foods/:id'
        render={ (props) => (<DetailsFoods { ...props } />) }
      />
      <Route
        path='/drinks/:id'
        render={ (props) => (<DetailsDrinks { ...props } />) }
      />
      <Route
        path='/drinks/:id/in-progress'
        component={ NotFound }
      />
      <Route
        path='/foods/:id/in-progress'
        render={ (props) => (<InProgressRecipes { ...props } />) }
      />
      <Route path="/explore" component={ Explore } />
      <Route path="/explore/foods" component={ FoodsExplored } />
      <Route path="/explore/drinks" component={ DrinksExplored } />

      <Route path="/explore/foods/ingredients" component={ IngredientsExploredFoods } />
      <Route path="/explore/foods/ingredients" component={ IngredientsExploredDrinks } />

      <Route path="/explore/foods/nationalities" component={ NationalitiesExplored } />

      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ Favorites } />

      <Route path="*" component={ NotFound } />
    </Switch>
    </BrowserRouter>
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
