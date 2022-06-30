import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Userbar from '../components/Userbar';

const LayoutComponent = () => {
    return (
        <div className="container-fluid fullheight">
            <div className="row fullheight">
                <Sidebar />
                <div className="col-md-6 contentbar p-5">
                    <Outlet />
                </div>
                <Userbar />
            </div>
        </div>
    );
};

export default LayoutComponent;
