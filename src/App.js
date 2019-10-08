import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/shop" component={Shop}></Route>
                <Route path='/signin' component={SignInSignUp} />
            </Switch>
        </div>
    );
}

export default App;
