import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/app.scss';

import Main from './layout/Main';
import Auth from './pages/Auth';
import DashBoard from './pages/DashBoard';
import DashBoardUser from './pages/DashBoardUser';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = () => {
    return (
        <Routes>
            <Route path="/" element={ <Auth /> } />
            <Route path="dashboard" element={ <Main /> }>
                <Route index element={ <DashBoard /> } />
                <Route path="user" element={ <DashBoardUser /> } />
            </Route>
        </Routes>
    );
};

export default App;