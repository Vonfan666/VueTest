import Vue from 'vue'
import Router from 'vue-router'
// VUE router 导航重复点击报错的问题解决方案
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: '404',
      component: () => import("@/libs/notfound")
    },
    {
      path: '/index',
      name: 'index',
      component: () => import("@/components/index"),
      

    }
  ]
})
