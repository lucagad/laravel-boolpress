<template>
  <div class="container-fluid">
    <HeaderComp/>

    <main>
      <router-view></router-view>
    </main>
      

    <FooterComp/>
  </div>


</template>

<script>

import FooterComp from './components/partials/FooterComp.vue'
import HeaderComp from './components/partials/HeaderComp.vue'
import {apiUrl} from '../js/config';

export default {
  components: { HeaderComp, FooterComp },
  name: 'app',

  data() {
    return {
      apiUrl,
      posts: ""
    }
  },

  mounted() {
    this.callPostsAPI()
  },

  methods: {
    callPostsAPI(){
      axios.get(this.apiUrl)
      .then(r => {
        this.posts = r.data.posts;
        // console.log('Risposta API Post---->',this.posts);
      })
    },
  }
}
</script>

<style lang="scss">

main{
  height: calc(100vh - 83px - 83px);
}

</style>