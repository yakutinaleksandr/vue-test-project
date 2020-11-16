<template>
    <div class='split right text-center'>
        <div>
            <div>
                <b>{{product.name}}</b>
            </div>
            <div class='icon'>
                <font-awesome-icon class='fa-5x' icon='fish'/>
            </div>
            <div>Count: {{product.amount}}</div>
            <div>Price: {{product.price}}$</div>
            <div>Total: {{product.amount * product.price}}$</div>
            <button v-on:click="back">Back</button>
        </div>
    </div>
</template>

<script>
    import ProductService from "@/services/ProductService";

    export default {
        name: "ProductDetails",
        data() {
            return {
                product: {
                    name: '',
                    price: 0,
                    amount: 1,
                    icon: 'fish'
                }
            }
        },

        mounted() {
            ProductService.getOne(this.$route.params.id)
            .then(response => {
                this.product = response.data.data
            })
        },

        methods: {
            back() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .vertical-middle{
        height: 100%;
        vertical-align: middle;
    }
</style>
