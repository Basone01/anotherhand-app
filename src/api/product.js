import axios from 'axios';
import {API_ENDPOINT} from 'src/config'
export function getProducts() {
	return axios.get(`${API_ENDPOINT}/products`);
}

export function createProduct(product) {
	return axios.post(`${API_ENDPOINT}/product`, { ...product });
}
