<template>
  <div class="container-fluid container_full">

      <div class="p-3 p-md-5 text-center text-light bg-dark">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal">Il Blog</h1>
          <p class="lead fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ullam libero numquam doloribus incidunt consectetur fugit asperiores. Obcaecati, magnam unde.
          </p>
        </div>
      </div>

      <div class="container-fluid row">

        <div class="col-10 main_column">
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
                    :key="`btn-key-${i}`"
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
          
          <div class="d-flex justify-content-center align-items-center flex-wrap my-3">
            <BlogPostComp
              v-for="post in posts"
              :key="`postkey-${post.id}`"
              :post="post"
            />
          </div>
        </div>

        <div class="col-2 aside">

        </div>

      </div>

  </div>
</template>

<script>
import BlogPostComp from './SecondaryComponents/BlogPostComp.vue';
import {apiUrl} from '../../config';

export default {
  components: { BlogPostComp },
  name: 'BlogComp',
  data() {
    return {
      apiUrl,
      posts: null,
      pagination: {
        current:'',
        last:''
      },
      isLoaded: false
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

        // console.log('Risposta API Post---->',this.posts);
        // console.log('Risposta PAGINATION ---->',this.pagination);
      })
    },
  }
}
</script>

<style lang="scss" scoped>

@import 'resources/sass/front/_variables.scss';

.container_full{
  height: calc(100vh - 83px - 83px);
  overflow-y:scroll;
  padding:0;
}

.page-item{
  
  &.active .page-link{
    background-color: $primary-color;
    border-color: $primary-color;
    color: white;
  }

  .page-link{
  color: $primary-color;
  }
}

.row{
  margin:0;
  padding: 0;
}

.aside{
  background-color: $aside-background;
  padding:0;
}



</style>