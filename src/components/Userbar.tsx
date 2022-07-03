import { Link } from "react-router-dom";
import User from '../assets/img/user.png'

import OrderCalculation from './order/Calculation';

const Userbar = () => (
    <div className="col-md-3 userbar p-5">
        <div className="userbar__header d-flex justify-content-between">
            <div className="userbar-header__wrapper">
                <h5 className="fw-bolder m-0">Марк Иванов</h5>
                <Link to="user">Мои настройки</Link>
            </div>
            <img src={User} className="userbar-header__img" alt="Марк Иванов" />
        </div>
        <div className="userbar__body">
            <OrderCalculation />
            <div>contact info</div>
            <div>orders list</div>
            <div>draft list</div>
        </div>
    </div>
)

export default Userbar;