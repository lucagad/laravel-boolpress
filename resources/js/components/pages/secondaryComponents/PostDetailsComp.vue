<template>

  <div class="row">

    <div class="col-4">
      <img src="img/placeholder.jpg" alt="Image Placeholder">
    </div>

    <div class="col-8">

      <div class="card_body_custom d-flex flex-column justify-content-center">

        <div class="title_box">
          <h6 class="card-title">{{post.title}}</h6>
          <span class="badge badge-info mb-2">{{post.category.name}}</span>
          <span class="badge badge-info mb-2">{{post.tags.name}}</span>
          <span class="badge badge-info mb-2">{{this.formatDate}}</span>

        </div>

      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'PostDetailsComp',

  data(){
    return{
      post: null, 
      apiUrl: '/api/posts/',
    }
  },

  mounted() {
    this.getPostsAPI()
  },

  methods: {
    getPostsAPI(){
      axios.get(this.apiUrl + this.$route.params.slug)
      .then(r => {
        this.post = r.data.data;
        console.log('Risposta API Post---->',this.post);

      })
    },
  },

  computed:{
    formatDate(){
      const d = new Date(this.post.updated_at);
      let day = d.getDate();
      let month = d.getMonth() + 1;
      const year = d. getFullYear();
      if(day < 10 ) day = '0' + day;
      if(month < 10 ) day = '0' + month;
      return '$(day)/${month}/${year}';
      }
  }
}
</script>

<style lang="scss">

@import 'resources/sass/front/_variables.scss';

.card{
  width: 320px;
  height: 300px;
  overflow: hidden;
  margin: 6px;
  position: relative;

  .card_body_custom{
    min-height: 1px;
    padding: 1.25rem;
  }

  .btn_custom{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    background-color: $primary-color;
  }
}

</style>