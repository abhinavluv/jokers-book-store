import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component.jsx';
import './App.css';


function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/shop" component={Shop}></Route>
            </Switch>
        </div>
    );
}

export default App;
