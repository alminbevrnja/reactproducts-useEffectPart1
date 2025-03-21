import axios from "axios";

class productService {
     static getAllProducts = () => axios.get('/products');
     static getSingleProduct = (id) => axios.get(`/products/${id}`)
}

export default productService