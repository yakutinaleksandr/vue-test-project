<template>
    <div class="split left">
        <h4>Add product to your cart list</h4>
        <input v-model="name" class="input" placeholder="Product name"/>
        <input v-model.number="price" type="number" class="input" placeholder="Product price"/>
        <div>
            <button :disabled="!(amount - 1)" v-on:click="changeAmount(amount - 1)">-</button>
            <span>{{amount}}</span>
            <button v-on:click="changeAmount(amount + 1)">+</button>
        </div>
        <IconSelect default="cheese"/>
    </div>
</template>

<script>
    import IconSelect from "@/components/IconSelect";
    const product = {
        name: '',
        price: 123,
        amount: 1
    }

    export default {
        name: "AddProduct",
        components: {IconSelect},
        data() {
            return product
        },
        methods: {
            kek: function () {
                console.log(this.$data.product)
            },

            changeAmount: (amount) => {
                product.amount = amount
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
    background-color: #223951;
    border: 1px solid #565758;
    border-radius: 5px;
    margin: 5px;
}
button {
    font-size: 18px;
    height: 40px;
    width: 40px;
    background-color: #223951;
    border-radius: 5px;
    margin: 5px;
    border: none;
}

button:disabled {
    background-color: #565758;
}
</style>
