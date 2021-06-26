import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

// componentes globales.
import { NavBar } from './NavBar.jsx';

// Componentes.
import { HomePage } from './HomePage.jsx';
import { LoginPage } from './LoginPage.jsx';
import { AboutPage } from './AboutPage.jsx';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <main className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/login" component={LoginPage} />

                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        </Router>
    );
};
