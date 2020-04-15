import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Error from '../views/Error.vue'
import ProductDetails from '@/components/ProductDetails.vue';
import ProductInsert from '@/components/ProductInsert.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/product/insert', // order important! before :id route
    name: 'productInsert',
    component: ProductInsert
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetails,
    props: castRouteParamsId
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'error',
    component: Error
  }
]

function castRouteParamsId(route) {
  return {
    id: Number(route.params.id),
  };
}

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
