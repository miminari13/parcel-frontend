import User from '../assets/img/user.png';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const LayoutComponent = () => {
    return (
        <div className="container-fluid fullheight">
            <div className="row fullheight">
                <Sidebar />
                <div className="col contentbar p-5">
                    <Outlet />
                </div>
                <div className="col userbar p-5">
                    <div className="userbar__header d-flex justify-content-between">
                        <div className="userbar-header__wrapper">
                            <h5 className="fw-bolder m-0">Марк Иванов</h5>
                            <Link to="/user">Мои настройки</Link>
                        </div>
                        <img src={User} className="userbar-header__img" alt="Марк Иванов" />
                    </div>
                    <div className="userbar__body">
                        <div>contact info</div>
                        <div>orders list</div>
                        <div>draft list</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutComponent;
