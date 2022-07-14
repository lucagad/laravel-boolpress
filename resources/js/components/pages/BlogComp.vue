<template>
  <div class="container-fluid container_full">

    <div class="p-3 p-md-5 text-center text-light bg-dark">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">Il Blog</h1>
        <p class="lead fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ullam libero numquam doloribus incidunt consectetur fugit asperiores. Obcaecati, magnam unde.
        </p>
      </div>
    </div>

    <div class="container-fluid">

      <div class="mx-2 my-3 text-center">
        <h2>Lista Post</h2>

        <div class="pagination_container my-3 d-flex justify-content-center">
            <ul class="pagination">
              <li class="page-item"
                  :class="pagination.current === 1 ? 'disabled' : '' ">
                <a class="page-link"
                  @click="getPostsAPI(pagination.current - 1)">&laquo;
                </a>
              </li>

              <li 
                v-for=" i in pagination.last"
                :key="btn-i"
                @click="getPostsAPI(i)"
                class="page-item"
                :class="pagination.current === i ? ' active' : '' " >
                <a class="page-link" href="#">{{i}}</a>
              </li>
    
              <li class="page-item"
                  :class="pagination.current === pagination.last ? 'disabled' : '' " >
                <a class="page-link"
                    @click="getPostsAPI(pagination.current + 1)">&raquo;
                </a>
              </li>
            </ul>
        </div>

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
      posts: null,
      pagination: null,
    }
  },

  mounted() {
    this.getPostsAPI(1)
  },

  methods: {
    getPostsAPI(page){
      axios.get(this.apiUrl + '?page=' + page)
      .then(r => {
        this.posts = r.data.data;
        this.pagination = {
          current: r.data.current_page, 
          last: r.data.last_page
        }

        console.log('Risposta API Post---->',this.posts);
        console.log('Risposta PAGINATION ---->',this.pagination);
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