<template>
  <div class="container-fluid container_full">

    <div class="p-3 p-md-5 text-center text-light bg-dark">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">Il Blog</h1>
        <p class="lead fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ullam libero numquam doloribus incidunt consectetur fugit asperiores. Obcaecati, magnam unde.
        </p>
      </div>
    </div>

    <div class="post_container">

      <div class="mx-2 my-3 text-center">
        <h2>Lista Post</h2>
      </div>
      
      <div class="d-flex justify-content-center align-items-center flex-wrap">
        <BlogPostComp
          v-for="post in posts" 
          :key="post.id"
          :post="post"
        />
      </div>
    </div>

  </div>
</template>

<script>
import BlogPostComp from './secondaryComponents/BlogPostComp.vue';

export default {
  components: { BlogPostComp },
  name: 'BlogComp',
  data() {
    return {
      apiUrl: "http://127.0.0.1:8000/api/posts",
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
        console.log('Risposta API Post---->',this.posts);
      })
    },
  }
}
</script>

<style lang="scss">

.container_full{
  height: calc(100vh - 83px - 83px);
  overflow-y:scroll;
  padding:0;
}

</style>