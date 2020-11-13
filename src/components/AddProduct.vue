<template>
    <div class="split left">
        <h4>Add product to your cart list</h4>
        <input v-model="product.name" class="input" placeholder="Product name"/>
        <input v-model.number="product.price" type="number" class="input" placeholder="Product price"/>
        <div>
            <button :disabled="!(product.amount - 1)" v-on:click="changeAmount(product.amount - 1)">-</button>
            <span>{{product.amount}}</span>
            <button v-on:click="changeAmount(product.amount + 1)">+</button>
        </div>
        <IconSelect :default="product.icon" v-on:onChange="changeIcon"/>
        <button v-on:click="addProduct">Add to list</button>
    </div>
</template>

<script>
    import IconSelect from "@/components/IconSelect";
    import ProductService from '../services/ProductService'

    export default {
        name: "AddProduct",
        components: {IconSelect},
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
        methods: {
            changeAmount(amount) {
                this.product.amount = amount
            },

            changeIcon(value) {
                this.product.icon = value
            },

            addProduct() {
                const payload = {
                    name: this.product.name,
                    price: this.product.price,
                    amount: this.product.amount,
                    icon: this.product.icon
                }
                ProductService.create(payload)
                .then(() => {
                    this.product = {
                        name: '',
                        price: 0,
                        amount: 1,
                        icon: 'fish'
                    }
                }, err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
.input {
    width: 100%;
    font-size: 17px;
    height: 40px;
    padding-left: 10px;
    background-color: rgba(55,71,81,0.87);
    border: 1px solid #565758;
    border-radius: 5px;
    margin: 10px;
    color: azure;
}

button:disabled {
    background-color: #565758;
}
</style>
