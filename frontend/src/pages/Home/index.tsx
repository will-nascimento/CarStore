import React, { useEffect } from 'react'
import axios from 'axios'
import api from '../../services'

const Home = ()=> {
            api.get('cars')
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            });

    return (
        <div>
            <h1>
                Home
            </h1>
        </div>
    )
}

export default Home