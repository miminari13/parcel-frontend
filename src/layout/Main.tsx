import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutComponent = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col sidebar">
                    Sidebar
                </div>
                <div className="col contentbar">
                    <Outlet />
                </div>
                <div className="col userbar">
                    UserData
                </div>
            </div>
        </div>
    );
};

export default LayoutComponent;
