import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import MainView from './views/MainView.vue'
import PostView from './views/PostView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: MainView },    
    { path: '/posts/:postID', component: PostView },
    { path: '*', redirect: '/' }
  ]
})
