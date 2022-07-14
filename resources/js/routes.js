import Vue from "vue";
import VueRouter from "vue-router" ;

Vue.use(VueRouter);

import HomeComp from './components/pages/HomeComp.vue'


const router = new VueRouter({
  mode: 'history',
  routes:[
          {
            path: '/',
            name: 'home',
            component: HomeComp
          },
          // {
          //   path: '/chi-siamo',
          //   name: 'about',
          //   component: AboutComp
          // },
          // {
          //   path: '/contatti',
          //   name: 'contacts',
          //   component: ContactsComp
          // }
        ]
});

export default router;