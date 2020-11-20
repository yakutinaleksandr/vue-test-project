<template>
    <div class="split right">
        <h4>Product list</h4>
        <Product v-for="p in products" v-bind:key="p._id" :product="p"/>
        <span class="float-left">
            Total: ${{calculateTotal()}}
        </span>
    </div>
</template>

<script>
    import Product from "@/components/Product";
    import ProductService from "@/services/ProductService";
    export default {
        name: "ProductList",
        components: {Product},
        data(){
            return {
                products: []
            }
        },
        mounted() {
            this.$eventHub.$on('product-modified', () => {
                this.getProducts()
            });
            this.getProducts()
        },

        beforeDestroy () {
            this.$eventHub.$off('product-modified')
        },

        methods: {
            getProducts() {
                ProductService.getAll()
                    .then(response => {
                        this.products = response.data.products;
                    }, error => {
                        alert(`${error.response.data.message}`)
                    })
            },

            calculateTotal() {
                return this.products.reduce((accumulator, product) =>
                    accumulator + product.price * product.amount, 0);
            }
        }
    }
</script>

<style scoped>
    .float-left {
        float: left;
    }
</style>
