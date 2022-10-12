import { useState } from 'react'
import Menu from '../../components/menu'
import { create } from '../../services/products.service'
import { toast } from 'react-toastify';

const Register = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response =  await create({
                name,
                price:Number(price),
                quantity:Number(quantity),
            });
            if(!response.data.success){
                toast.error('error on create product');
                return;
            }
            toast.success('success on create product');
        } catch (error) {
            toast.error('error on create product');
        }
    }

    return (
        <div className='container'>
            <Menu />
            <h2>
                Cadastro de produtos
            </h2>
            <form className='formContainer' onSubmit={handleSubmit} >
                <div className='generalLabel'>
                    <div className='minorLabel'>
                        <label htmlFor="name" className='label'>Name</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Ex.: Camisa polo vermelha"/>
                    </div>
                    <div className='minorLabel'>
                        <label htmlFor="price" className='label'>Preço</label>
                        <input type="number" value={price} onChange={e => setPrice(e.target.value)}/>
                    </div>
                    <div className='minorLabel'>
                        <label htmlFor="quantity" className='label'>Quantidade</label>
                        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)}/>
                    </div>
                </div>

            </form>
            <button className='button-new' onClick={handleSubmit}>Adicionar produto</button>
        </div>
    )
}

export default Register