import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../services'
import CarList from '../../components/carList';
import CarEdit from '../../components/carEdit';
import CarAdd from '../../components/carAdd';
import CarDelete from '../../components/carDelete';
import { Link } from 'react-router-dom';
import Menu from '../../components/menu';
interface HomeProps {
    _id: number,
    brand: String,
    model: String,
    version: String,
    year: Number,
    mileage: Number,
    gearbox: String,
    price: Number,
}

const Home: React.FC = () => {

    const [dados, setDados] = useState<HomeProps[]>([])

    useEffect(() => {
        api
            .get('cars')
            .then((response) => setDados(response.data))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='container'>
            <Menu/>
            <h2>
                Inventário
            </h2>
            <div className='tableHead'>
                <div>Marca</div>
                <div>modelo</div>
                <div>ano</div>
                <div>preço</div>
            </div>
            <div className='tableContainer'>
            {dados.map((item, index) => {
                return (
                <CarList item={item} key={item._id} />
                )
            })}
            </div>
        </div>
    )
}

export default Home