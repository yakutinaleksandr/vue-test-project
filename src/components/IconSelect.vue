<template>
    <div>
        <div class="icon" v-on:click="changeOpened">
            <font-awesome-icon :icon="icon" class="fa-5x"/>
        </div>
        <div>

            <div v-if="isOpened" class="icon-options-wrapper">
                <div class="icon selectable">
                    <font-awesome-icon icon="fish" class="fa-5x" v-on:click="changeIcon('fish')"/>
                </div>

                <div class="icon selectable">
                    <font-awesome-icon icon="cheese" class="fa-5x" v-on:click="changeIcon('cheese')"/>
                </div>

                <div class="icon selectable">
                    <font-awesome-icon icon="carrot" class="fa-5x" v-on:click="changeIcon('carrot')"/>
                </div>

                <div class="icon selectable">
                    <font-awesome-icon icon="pizza-slice" class="fa-5x" v-on:click="changeIcon('pizza-slice')"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IconSelect",
        props: ['default'],
        data() {
            return {
                icon: this.default,
                isOpened: false
            }
        },
        methods: {
            changeOpened() {
                this.isOpened = !this.isOpened
            },

            changeIcon(newIcon) {
                this.icon = newIcon;
                this.changeOpened();
                this.$eventHub.$emit('icon-change', newIcon)
            }
        }
    }
</script>

<style>
    .icon {
        background-color: rgba(55,71,81,0.87);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin: 5px;
    }
</style>

<style scoped>

    .selectable {}

    .selectable:hover {
        background-color: #565758;
    }

    .icon-options-wrapper {
        background-color: rgba(55,71,81,0.87);
        display: inline-block;
        width: fit-content;
        border-radius: 5px;
        margin: 5px;
    }
</style>
