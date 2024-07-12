import {addCartItemRequest, addCartItemSuccess} from '../slices/cartSlice';
import axios from 'axios'
import { API_URL } from '../App';

export const addCartItem = (id, quantity) => async(dispatch) => {
    try {
        dispatch(addCartItemRequest())
        const {data } = await axios.get(`http://localhost:8000/api/v1/product/${id}`)
        dispatch(addCartItemSuccess({
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].image,
            stock: data.product.stock,
            quantity
        }))
    } catch (error) {
        
    }
}