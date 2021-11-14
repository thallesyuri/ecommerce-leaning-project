import React from 'react';
//Importing the routes that's going to surround the each route
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            //Inside the Route: "exact" is to force the path to match the path
            //"path" is the "address" that you woul like to use
            //"element" is the element the component used
            <div>
                <Header currentUser={this.state.currentUser} />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/signin" element={<SignInAndSignUpPage />} />
                </Routes>
            </div>
        );
    }
}

export default App;
