<template>
  <div id="app" class="wrapper">
    <AddProduct/>
    <router-view>
      <ProductList/>
    </router-view>
  </div>
</template>

<script>
import AddProduct from "@/components/AddProduct";
import ProductList from "@/components/ProductList";

export default {
  name: 'App',
  components: {
    ProductList,
    AddProduct
  }
}
</script>

<style>
#app {
  margin: 0;
  color: azure;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  font-size: 18px;
  height: 40px;
  background-color: #223951;
  border-radius: 5px;
  margin: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  color: azure;
  min-width: 40px;
}

button:disabled {
  background-color: #565758;
}

.split {
  height: 100%;
  width: 50%;
  position: fixed;
  background-color: #282c34;
  padding: 20px;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
}

.left {
  left: 0;
  text-align: center;
}

.right {
  right: 0;
  text-align: center;
}

.wrapper {
  background-color: #282c34;
  color: azure;
  min-height: 100%;
}
</style>
