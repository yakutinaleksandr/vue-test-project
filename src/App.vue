<template>
  <div id="app" class="wrapper">
    <AddProduct/>
  </div>
</template>

<script>
import AddProduct from "@/components/AddProduct";

export default {
  name: 'App',
  components: {
    AddProduct
  }
}
</script>

<style>
#app {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  background-color: #282c34;
}

.wrapper {
  background-color: #282c34;
  color: azure;
  min-height: 100%;
}
</style>
