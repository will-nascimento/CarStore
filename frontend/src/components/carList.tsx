import "../style/global.css";

function CarList(props: any) {
    const { name, quantity, _id, price } = props.item
    return (
        <div>
            <div className='tableBody'>
                <div>{_id}</div>
                <div>{name}</div>
                <div>{quantity}</div>
                <div>{price}</div>
            </div>
        </div>
    )
}

export default CarList