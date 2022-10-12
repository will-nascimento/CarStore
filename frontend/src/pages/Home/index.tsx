import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CarList from '../../components/carList';
import Menu from '../../components/menu';
import { eraseProduct, findAll, ProductProps } from '../../services/products.service';


const Home: React.FC = () => {

    const [dados, setDados] = useState<ProductProps[]>([])
    const [product, setProduct] = useState({id:'', quantity:''});

    useEffect(() => {
        async function load() {
            const response = await findAll();
            console.log(response.data);
            setDados(response.data.products);
        }
        load();
    }, []);

    const erase = async (e: any) => {
        e.preventDefault();
        try {
            console.log('id',product.id);
            const response =  await eraseProduct(product.id);
            if(!response.data.success){
                console.log('data',response.data);
                toast.error('error on erase product');
                return;
            }
            toast.success('Success');
            window.location.reload();
        } catch (error) {
            console.log('2',error);
            toast.error('error on erase product');
        }
    }

    return (
        <div className='container'>
            <Menu />
            <h2>
                Inventário
            </h2>
            <div>
            {
                    dados.length > 0 &&
                    (
                        <select onChange={(e)=> setProduct({...product, id: e.target.value})}>
                            {<option key="0" value=''>selecione um produto</option>}
                            {
                                dados.map((item) => (
                                    <option key={item._id} value={item._id}>{item.name}</option>
                                ))
                            }
                        </select>
                    )
                }
            <button className='button-new' onClick={erase}>Apagar</button>
            </div>
            <div className='tableHead'>
                <div>Id</div>
                <div>Nome</div>
                <div>Quantidade</div>
                <div>Preço</div>
            </div>
            <div className='tableContainer'>
                {dados.map((item) => <CarList item={item} key={item._id} />)}
            </div>
        </div>
    )
}

export default Home;