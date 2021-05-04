<template>
  <div>
    <h1>Catalog page</h1>
    <input type="text" v-model="name" placeholder="Filter by name" class="input">
    <ul class="product-list">
      <li class="product" v-for="product in filterProductsByName" :key="product.name">
        <span>
          <strong>Product name:</strong>
          {{cut(product.name)}}
        </span>
        <span>
          <strong>Price: </strong>
          {{product.price}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Catalog',
    data() {
      return {
        name: ''
      }
    },
    beforeRouteEnter() {
      console.log('CATALOG PAGE IS CLOSED')
    },
    computed: {
      ...mapGetters(
              ['productsState']
      ),
      filterProductsByName: function() {
        return this.productsState.filter(product => !product.name.indexOf(this.name))
      },
    },
    methods: {
      cut: function (value) {
        return value.length >= 15 ? value.substring(0, 15) + '...' : value;
      }
    }
  }
</script>

<style scoped>
  .input {
    width: 300px;
    padding: 15px;
    border: 2px solid green;
    border-radius: 5px;
    outline: none;
  }

  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
    grid-gap: 20px;
    max-width: 80%;
    margin: 40px auto;
    padding: 0;
  }

  .product {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100px;
    border: 3px solid green;
    border-radius: 10px;
  }
</style>
