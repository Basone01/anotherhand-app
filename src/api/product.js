import axios from "axios";
import { API_ENDPOINT, IMAGE_ENDPOINT } from "src/config";
export function getProducts() {
  return axios.get(`${API_ENDPOINT}/products`).then(res => {
    console.log("dara", res.data);
    return res.data.map(addPrefixToImagePath);
  });
}
export function getProductById(id) {
  return axios
    .get(`${API_ENDPOINT}/product/${id}`)
    .then(res => {
      console.log(res.data);
      return addPrefixToImagePath(res.data);
    })
    .catch(err => console.log(err));
}
export function createProduct(product) {
  return axios.post(`${API_ENDPOINT}/product`, { ...product }).then(res => {
    return addPrefixToImagePath(res.data);
  });
}
export function deleteProduct(_id) {
  console.log(_id);
  return axios
    .delete(`${API_ENDPOINT}/product`, { data: { _id } })
    .then(res => res.data);
}

export function updateProduct(product) {
  
  return axios
    .put(`${API_ENDPOINT}/product`, {  ...product  })
    .then(res => res.data);
}



const addPrefixToImagePath = product => {
  console.log(product);
  return {
    ...product,
    images_path: product.images_path.map(
      image_path => IMAGE_ENDPOINT + image_path
    )
  };
};
