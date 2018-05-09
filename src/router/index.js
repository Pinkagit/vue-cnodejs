import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/page/content'
import Index from '@/page/index'


Vue.use(Router)   // 在模块环境下必须始终显式地调用 Vue.use()

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content/:id',
      component: Content
    }
  ]
})
