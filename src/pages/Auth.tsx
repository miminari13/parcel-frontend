import React from 'react';
import { Link } from 'react-router-dom';

const Auth = () => (
    <div className="container-fluid fullheight">
        <div className="row fullheight">
            <div className="col-md-4 offset-md-4 m-auto">
                <form className="card card--shadow">
                    <h1 className="mb-4">Авторизация</h1>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email адрес</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value="admin@parcel.com" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label">Password</label>
                        <input type="password" className="form-control" id="pass" value="********" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="remember" checked />
                        <label className="form-check-label" htmlFor="remember">Запомнить меня</label>
                    </div>
                    <Link to="/dashboard" className="btn btn-primary">Войти</Link>
                </form>
            </div>
        </div>
    </div>
);

export default Auth;