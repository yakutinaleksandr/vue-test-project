<template>
    <div class='split right text-center vertical-middle'>
        <div class='centered'>
            <div>
                <b>{product.name}</b>
            </div>
            <div class='icon'>
                <font-awesome-icon class='fa-5x' icon='fish'/>
            </div>
            <div>Count: {product.amount}</div>
            <div>Price: {product.price}$</div>
            <div>Total: {product.amount * product.price}$</div>
            <spas class='btn btn-secondary' to=''>Back</spas>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ProductDetails"
    }
</script>

<style scoped>
    .vertical-middle{
        height: 100%;
        vertical-align: middle;
    }
</style>
