import api from ".";

export interface ProductProps {
    _id: number,
    name: string,
    quantity:Number,
    price: Number,
}

export const findAll = async () => api.get('product/all', {});

export const create = async (data: any) => api.post('product/create', { ...data });

export const sellProduct = async (id: string, quantity: number) => api.post(`product/sell/${id}`, { quantity });

export const eraseProduct = async (id: string) => api.delete(`product/delete/${id}`);

