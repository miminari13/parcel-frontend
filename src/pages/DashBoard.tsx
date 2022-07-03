import { useState } from 'react';

interface PackageI {
    type: string,
    size: number,
    weight: number
}

interface OrderI {
    [key: string]: any;
    personType: string;
    fromDeliveryMethod: string;
    fromAddr: string;
    toDeliveryMethod: string;
    toAddr: string;
    package: PackageI,
    date: string;
    time: string;
}

const DashBoard = () => {
    const userOrders = 0; // get from api later
    const EMPTY_ORDER: OrderI = {
        personType: '',
        fromDeliveryMethod: '',
        fromAddr: '',
        toDeliveryMethod: '',
        toAddr: '',
        package: {
            type: '',
            size: 0,
            weight: 0
        },
        date: '',
        time: ''
    };
    const START_PRICE:number = 500;  // start from 500rub
   
    const [price, setPrice] = useState(START_PRICE);
    const [order, setOrder] = useState(EMPTY_ORDER);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // order form
        const updOrder = {...order};
        const {name, value} = e.target;

        name === 'weight' || name === 'size' ? 
            updOrder.package[name] = +value : // value convert to number
            updOrder[name] = value; 
        setOrder(updOrder);
        console.log(updOrder, value, typeof value);

        // calc price (move to redux later)
        let updPrice = START_PRICE;
        if (name === 'personType' && value === 'juridicalPerson') {
            updPrice = updPrice + updPrice * 0.05                    // + 5%
        }
        setPrice(updPrice);
    };
    const reset = (e: any) => {
        e.preventDefault();
        setOrder(EMPTY_ORDER);
    }
     
    return(
        <div>
            <h2 className="mb-4">Оформление заказа
                <div className="text-primary">Рассчет #{userOrders + 1}</div>
            </h2>
            {/* <div className="mb-3">
                <div>price: {price}</div>
                <div>person: {order.personType}</div>
                <div>fromDeliveryMethod: {order.fromDeliveryMethod}</div>
                <div>fromAddr: {order.fromAddr}</div>
                <div>toDeliveryMethod: {order.toDeliveryMethod}</div>
                <div>toAddr: {order.toAddr}</div>
                <div>package: {order.package.type}, {order.package.size}, {order.package.weight}</div>
                <div>dt: {order.date} {order.tme}</div>
            </div>
            <hr /> */}

            <form>
                <div className="mb-5">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="naturalPerson" name="personType" id="natural" onChange={(e) => handleChange(e)} />
                        <label className="form-check-label" htmlFor="natural">Физическое лицо</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="juridicalPerson" name="personType" id="juridical" onChange={(e) => handleChange(e)} />
                        <label className="form-check-label" htmlFor="juridical">Юридическое лицо</label>
                    </div>
                </div>

                <div className="mb-3">
                    <h6 className="fw-bolder">Город отправки</h6>
                    <input type="text" name="fromAddr" value={order.fromAddr} className="form-control" placeholder="Москва" onChange={(e) => handleChange(e)} />
                </div>

                <div className="mb-5">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="courier" name="fromDeliveryMethod" id="from-method-courier" onChange={(e) => handleChange(e)} />
                        <label className="form-check-label" htmlFor="from-method-courier">Отправка курьером</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="point" name="fromDeliveryMethod" id="from-method-point" onChange={(e) => handleChange(e)}  />
                        <label className="form-check-label" htmlFor="from-method-point">Отправка из пункта</label>
                    </div>
                </div>

                <div className="mb-3">
                    <h6 className="fw-bolder">Город выдачи</h6>
                    <input type="text" name="toAddr" value={order.toAddr} className="form-control" placeholder="Москва" onChange={(e) => handleChange(e)} />
                </div>

                <div className="mb-5">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="courier" name="toDeliveryMethod" id="to-method-courier" onChange={(e) => handleChange(e)} />
                        <label className="form-check-label" htmlFor="to-method-courier">Выдача курьером</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="point" name="toDeliveryMethod" id="to-method-point" onChange={(e) => handleChange(e)}  />
                        <label className="form-check-label" htmlFor="to-method-point">Выдача в пункт</label>
                    </div>
                </div>

                <div className="mb-5">
                    <h6 className="fw-bolder">Габариты груза</h6>
                    <select className="form-select mb-3">
                        <option value="custom">Указать размеры</option>
                        <option value="mail">Письмо</option>
                        <option value="sx-pack">Маленькая посылка (до 1м&sup3;)</option>
                        <option value="xl-pack">Крупная посылка (более 1м&sup3;)</option>
                    </select>
                    <label className="form-label">Вес посылки(кг)</label>
                    <input type="number" name="weight" value={order.package.weight} className="form-control" onChange={(e) => handleChange(e)} />
                </div>

                <div className="mb-5">
                    <h6 className="fw-bolder">Дата и время отправки груза</h6>
                    <label className="form-label">Дата отправки</label>
                    <input type="date" name="date" value={order.date} className="form-control mb-3" 
                    onChange={(e) => handleChange(e)} />
                    <label className="form-label">Время отправки</label>
                    <input type="time" name="time" value={order.time} className="form-control"
                    onChange={(e) => handleChange(e)} />
                </div>

                <div>
                    <button className="btn btn-primary me-3">Оформить и оплатить</button>
                    <button className="btn btn-secondary me-3">В черновики</button>
                    <button className="btn btn-secondary me-3" onClick={(e) => reset(e)}>Сбросить</button>
                </div>
            </form>
        </div>
    )
};

export default DashBoard;