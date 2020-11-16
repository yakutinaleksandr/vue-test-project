<template>
    <div class="product-list-item">
        <div class='product-buttons-wrapper'>
            <button class='btn btn-sm btn-secondary'>
                <font-awesome-icon icon="trash-alt" v-on:click="remove"/>
            </button>
            <button class='btn btn-sm btn-secondary' v-on:click="toProductDetails">
                <font-awesome-icon icon="link"/>
            </button>
        </div>
        <div class="icon float-left">
            <font-awesome-icon :icon="product.icon" class="fa-5x"/>
        </div>
        <div class='product-list-description text-center'>
            <div>{{this.product.name}}</div>
            <div>
                <button :disabled="!(product.amount - 1)" v-on:click="changeAmount(product.amount - 1)">-</button>
                <span>{{product.amount}}</span>
                <button v-on:click="changeAmount(product.amount + 1)">+</button>
            </div>
            <div>
                <span>Total: {{this.product.amount * this.product.price}}$</span>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductService from "@/services/ProductService";

    export default {
        name: "Product",
        props: ['product'],
        methods: {
            toProductDetails(){
                this.$router.push(`/${this.product._id}`)
            },

            changeAmount(amount) {
                ProductService.updateAmount(this.product._id, amount)
                .then(() => {
                    this.$eventHub.$emit('product-modified')
                })
            },

            remove() {
                ProductService.delete(this.product._id)
                .then(() => {
                    this.$eventHub.$emit('product-modified')
                })
            }
        }
    }
</script>

<style scoped>
    .product-list-item {
        width: 90%;
        padding-left: 10px;
        height: 130px;
        background-color: rgba(55,71,81,0.87);
        border-radius: 5px;
        margin-bottom: 5px;
    }

    .product-buttons-wrapper {
        position: relative;
        float: right;
    }

    .float-left {
        float: left;
    }

    .product-list-description {
        font-size: 18px;
        position: relative;
        display: inline-block;
        padding: 15px;
    }
</style>
