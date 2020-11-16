import http from "../http-common"

class ProductService {

    create = (data) =>  {
        return http.post('/product', data)
    };

    getAll = () => {
        return http.get('/product')
    };

    delete = (id) => {
        return http.delete(`/product/${id}`)
    };

    getOne = (id) => {
        return http.get(`/product/${id}`)
    };

    updateAmount = (id, amount) => {
        return http.put(`/product/${id}`, {amount})
    }
}


export default new ProductService();
