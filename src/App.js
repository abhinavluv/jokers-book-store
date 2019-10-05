import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const kidsPage = () => {
    return (
        <div>
            <h1>Kids Books</h1>
        </div>
    );
};

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/kids" component={kidsPage}></Route>
            </Switch>
        </div>
    );
}

export default App;
