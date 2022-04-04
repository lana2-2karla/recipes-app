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
// import MainPage from './pages/MainPage';

// import rockGlass from './images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route
          exact
          path="/foods/:id"
          render={ (props) => (<DetailsFoods { ...props } />) }
        />
        <Route
          exact
          path="/drinks/:id"
          render={ (props) => (<DetailsDrinks { ...props } />) }
        />
        <Route
          exact
          path="/drinks/:id/in-progress"
          render={ (props) => (<InProgressRecipes { ...props } />) }
        />
        <Route
          exact
          path="/foods/:id/in-progress"
          render={ (props) => (<InProgressRecipes { ...props } />) }
        />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ FoodsExplored } />
        <Route exact path="/explore/drinks" component={ DrinksExplored } />

        <Route
          exact
          path="/explore/foods/ingredients"
          component={ IngredientsExploredFoods }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ IngredientsExploredDrinks }
        />

        <Route
          exact
          path="/explore/foods/nationalities"
          component={ NationalitiesExplored }
        />

        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ Favorites } />

        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
