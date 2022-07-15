import Vue from "vue";
import VueRouter from "vue-router" ;

Vue.use(VueRouter);

import HomeComp from './components/pages/HomeComp.vue'
import AboutComp from './components/pages/AboutComp.vue'
import ContactsComp from './components/pages/ContactsComp.vue'
import BlogComp from './components/pages/BlogComp.vue'
import PostDetailsComp from './components/pages/SecondaryComponents/PostDetailsComp.vue'


const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass:'active',
  routes:[
          {
            path: '/',
            name: 'home',
            component: HomeComp
          },
          {
            path: '/blog',
            name: 'blog',
            component: BlogComp
          },
          {
            path: '/chi-siamo',
            name: 'about',
            component: AboutComp
          },
          {
            path: '/contatti',
            name: 'contacts',
            component: ContactsComp
          },
          {
            path: '/dettagli/:slug',
            name: 'dettagli',
            component: PostDetailsComp
          }
        ]
});

export default router;