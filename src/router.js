import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import main from './views/main.vue'
import DoctorMenZhen from './views/DoctorMenZhen.vue'
import DoctorYiJimanager from './views/DoctorYiJimanager.vue'
import DoctorXiYao from './views/DoctorXiYao.vue'
import DoctorZhongyao from './views/DoctorZhongyao.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', 
      component: Home,
      redirect: 'main',
      children: [
        {
          path: 'main',
          name: '首页',
          component: main
        },
        {
          path: 'DoctorMenZhen',
          name: '门诊病历',
          component: DoctorMenZhen
        },
        {
          path: 'DoctorYiJimanager',
          name: '医技模板管理',
          component: DoctorYiJimanager
        },
        {
          path: 'DoctorXiYao',
          name: '西药处方管理',
          component: DoctorXiYao
        },
        {
          path: 'DoctorZhongyao',
          name: '中药处方管理',
          component: DoctorZhongyao
        }
      ]
    }
  ]
})
