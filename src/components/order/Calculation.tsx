const Calculation = ()=> {
    let totalCost = 500;

    return (
        <div className="order-calculation card card--gray mb-3">
            <h6 className="fw-bolder m-0">Расчет заказа</h6>
            <div>Стоимость: {totalCost}</div>

            <div className="mt-5">
                <button>Распечатать</button>
            </div>
        </div>
    )
}

export default Calculation