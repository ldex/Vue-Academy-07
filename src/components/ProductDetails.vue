<template>
  <div>
    <section v-if="error">
      {{error.message}}
    </section>
    <section v-else>
      <div v-if="loading">
          <h2>Loading...</h2>
      </div>
      <div v-else>
        <h2>{{product.name | uppercase}}</h2>
        <img :src="product.imageUrl ? product.imageUrl : 'https://placeimg.com/200/200/tech'" width="200" style="float:right" />
        <h3>{{product.description}}</h3>
        <p>Price: {{product.price | currency('$', 2, { symbolOnLeft: false })}}</p>
        <p>Fixed price? {{product.fixedPrice}}</p>
        <p>Discontinued? {{product.discontinued}}</p>
        <p>Modified date: {{product.modifiedDate | formatDate('MM/DD/YYYY hh:mm') }}</p>  
        <v-btn @click="onDelete(product.id)">Delete</v-btn>             
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

    export default {
        data () {
            return {
                error: null,
                loading: false,
                componentName: 'Product Details',
            }
        },
        computed: {
            ...mapState(['product']), // map `this.product` to `this.$store.state.product`
        },
        props: {
            id: {
                type:Number,
                required:true
            }
        },
        methods: {
            onDelete(id) {
                if(window.confirm('Are you sure ?')) {        
                    this.deleteProduct(id)
                    .then(() => {        
                        console.log('The product has been deleted.');
                        this.$router.push({ name: 'products'});
                    })
                    .catch(error => {
                        console.log('There was an error:', error.response)
                    });
                }
            },
            ...mapActions(['fetchProduct','deleteProduct']) // map `this.fetchProduct(this.id)` to `this.$store.dispatch('fetchProduct', this.id)`
        },
        created() {
          this.fetchProduct(this.id);
        }
    }
</script>

<style lang="scss" scoped>

</style>