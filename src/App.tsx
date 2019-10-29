import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ModalRoute from "./common/components/ModalRoute";
import ModalSwitch from './routing/ModalSwitch';

const App: React.FC = () => {
    return (
        <Router>
            <ModalSwitch>
                <Route path={'/'} exact>
                    <HomePage/>
                </Route>
                <ModalRoute path={'/login'}>
                    <LoginPage/>
                </ModalRoute>
                <ModalRoute path={'/signup'}>
                    <LoginPage/>
                </ModalRoute>
            </ModalSwitch>
        </Router>
    );
};

export default App;
