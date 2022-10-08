import React from 'react'
import "../style/global.css"
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton
} from 'react-admin'

function CarList(props: any) {
    const { brand, model, year, gearbox, version, mileage, price } = props.item
    return (
        <div>
          <div className='tableBody'>
                    <div>{brand}</div>
                    <div>{model}</div>
                    <div>{year}</div>
                    <div>{price}</div>
            </div>
        </div>
    )
}

export default CarList