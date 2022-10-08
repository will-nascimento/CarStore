import React from 'react'
import { Link } from 'react-router-dom'

function menu() {
    return (
        <div>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/">Início</Link> |{" "}
                <Link to="/register">Cadastro</Link> |{" "}
                <Link to="/sell">Vendas</Link>
            </nav>
        </div>
    )
}

export default menu