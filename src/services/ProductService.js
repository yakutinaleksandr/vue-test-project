import http from "../http-common"

class ProductService {

    create = (data) =>  {
        return http.post('/product', data)
    }

    getAll = () => {
        return http.get('/product')
    }

    delete = (id) => {
        return http.delete(`/product/${id}`)
    }
}


export default new ProductService();
