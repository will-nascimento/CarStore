import { useEffect, useState } from 'react';
import Menu from '../../components/menu';
import { findAll, ProductProps, sellProduct } from '../../services/products.service';
import { toast } from 'react-toastify';
import { number } from 'react-admin';

const Sell = () => {

    const [dados, setDados] = useState<ProductProps[]>([])
    const [product, setProduct] = useState({ id: '', quantity: '1' });

    useEffect(() => {
        async function load() {
            const response = await findAll();
            setDados(response.data.products);
        }
        load();
    }, []);

    const sell = async (e: any) => {
        e.preventDefault();
        
        try {
            if (Number(product.quantity) <= 0){
                toast.error('product quantity has to be more than 0');
                return;
            } 
            const response = await sellProduct(
                product.id,Number(product.quantity)
            );
            if (!response.data.success) {
                toast.error('error on sell product');
                return;
            }
            toast.success('Success');

        } catch (error) {
            toast.error('error on sell product');

        }

    }

    return (
        <div className='container'>
            <Menu />
            <h2>
                Venda de produtos
            </h2>
            {
                    dados.length > 0 &&
                    (
                        <select onChange={(e) => setProduct({ ...product, id: e.target.value })}>
                            {
                                dados.map((item) => (
                                    <option key={item._id} value={item._id}>{item.name}</option>
                                ))
                            }
                        </select>
                    )
                }
            <div>
                <div className='minorLabel'>
                    <label htmlFor="quantity" >Quantidade</label>
                    <input type="number" value={product.quantity} id='quantity' onChange={(e) => setProduct({ ...product, quantity: e.target.value })} />
                </div>
            </div>
            <button className='button-new' onClick={sell}>Vender</button>
        </div>
    )
}

export default Sell