import React from 'react'
import { Link } from 'react-router-dom'

function menu() {
    return (
        <div>
            <nav
                style={{
                    borderBottom: "solid 1px red",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/" className='link' >Início</Link> |{" "}
                <Link to="/register" className='link'>Cadastro</Link> |{" "}
                <Link to="/sell" className='link' >Vendas</Link>
            </nav>
        </div>
    )
}

export default menu