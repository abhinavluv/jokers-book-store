import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }
    // handle user subscription starts
    unsubscribeFromAuth = null;

    componentDidMount() {
        // creates a user session
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // this.setState({ currentUser: user });
            // createUserProfileDocument(user);
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });
                });
            } else {
                this.setState({ currentUser: userAuth });
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    // user subscription ends

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route path='/shop' component={Shop}></Route>
                    <Route path='/signin' component={SignInSignUp} />
                </Switch>
            </div>
        );
    }
}

export default App;
