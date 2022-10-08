import React from 'react'
import Menu from '../../components/menu'

const Register = ()=> {
    return (
        <div className='container'>
            <Menu />
            <h2>
                Cadastro de carros
            </h2>
            <div className='generalLabel'>
                <div className='minorLabel'>
                    <label htmlFor="marca">Marca</label>
                    <input type="text" id='marca' placeholder="Ex.: Chevrolet"/>
                </div>
                <div className='minorLabel'>
                    <label htmlFor="modelo">Modelo</label>
                    <input type="text" id='modelo' placeholder="Ex.: Onix"/>
                </div>
                <div className='minorLabel'>
                    <label htmlFor="ano">Ano</label>
                    <input type="text" id='ano' placeholder="Ex.: 2022"/>
                </div>
                <div className='minorLabel'>
                    <label htmlFor="preco">Preço</label>
                    <input type="text" id='preco' placeholder="Ex.: 22000"/>
                </div>
            </div>
        </div>
    )
}

export default Register