import Logo from '../assets/img/logo.png'

const Sidebar = () => (
    <div className="col sidebar p-5">
        <div className="sidebar__header">
            <div className="d-flex align-items-center">
                <img src={Logo} className="sidebar-header__img me-3" alt="parcel" />
                <h5 className="fw-bolder">parcel</h5>
            </div>
        </div>
        <div className="sidebar__body">
            <div>calendar</div>
            <div>add order</div>
            <div>add draft</div>
        </div>
    </div>
);

export default Sidebar;