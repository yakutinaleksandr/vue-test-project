<template>
    <div class="split right">
        <h4>Product list</h4>
        <Product v-for="p in products" v-bind:key="p._id" :product="p"/>
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
            ProductService.getAll()
            .then(response => {
                this.products = response.data.data;
            })
        }
    }
</script>

<style scoped>

</style>
