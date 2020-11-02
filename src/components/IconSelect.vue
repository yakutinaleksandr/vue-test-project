<template>
    <div>
        <div class="icon" v-on:click="changeOpened">
            <font-awesome-icon icon="this.icon" class="fa-5x"/>
        </div>
        <div v-if="isOpened" class="icon-options-wrapper">
            <div class="icon selectable">
                <font-awesome-icon icon="fish" class="fa-5x"/>
            </div>

            <div class="icon selectable">
                <font-awesome-icon icon="cheese" class="fa-5x"/>
            </div>

            <div class="icon selectable">
                <font-awesome-icon icon="carrot" class="fa-5x"/>
            </div>

            <div class="icon selectable">
                <font-awesome-icon icon="pizza-slice" class="fa-5x"/>
            </div>
        </div>
    </div>
</template>

<script>
    // const data = {
    //     isOpened: false,
    //     icon: this.icon
    // }
    export default {
        name: "IconSelect",
        props: ['default'],
        data() {
            console.log(this.default)

            return {
                isOpened: false,
                icon: this.default
            }
        },
        methods: {
            changeOpened: () => {
                this.isOpened = !this.isOpened
            }
        }
    }
</script>

<style scoped>
    .icon {
        background-color: #223951;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin: 5px;
    }

    .selectable {}

    .selectable:hover {
        background-color: #565758;
    }

    .icon-options-wrapper {
        background-color: #223951;
        display: inline-block;
        width: fit-content;
        border-radius: 5px;
        margin: 5px;
    }
</style>
