import React, { useState } from 'react'
import Menu from '../../components/menu'
import api from '../../services'

const Register = () => {

    const [marca, setMarca] = useState('')
    const [dados, setDados] = useState([])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await api.request({url:'car',data:{
            brand: "String",
            model: "String",
            version: "String",
            year: 2022,
            mileage: 140000,
            gearbox: "String",
            price: 10000
        }})
            .then((response: any) => console.log(response))
            .catch((error: any) => {
                console.log(error)
            });
    }

    return (
        <div className='container'>
            <Menu />
            <h2>
                Cadastro de carros
            </h2>
            <form className='formContainer' onSubmit={handleSubmit} >
                <div className='generalLabel'>
                    <div className='minorLabel'>
                        <label htmlFor="marca" className='label' >Marca</label>
                        {/* <input type="text" value={marca} onChange={e => setMarca(e.target.value)} placeholder="Ex.: Chevrolet"/> */}
                    </div>
                </div>
                <input type="submit" value="adicionar produto" className='button' />
            </form>
        </div>
    )
}

export default Register