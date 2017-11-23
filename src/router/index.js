import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login.vue'
import Detail from '../pages/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Login,
      meta: {
        depth: 1
      }
    },
    {
      path: '/detail/:id',
      component: Detail,
      meta: {
        depth: 2
      }
    }
  ]
})
