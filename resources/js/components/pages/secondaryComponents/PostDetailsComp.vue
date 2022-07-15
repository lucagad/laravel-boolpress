<template>

    <div class="col-8">

      <div class="d-flex flex-column justify-content-center">

        <div class="title_box">
          <h6 class="">{{post.title}}</h6>
          <span class="mb-2">{{this.formatDate}}</span>
          <span class="badge badge-info mb-2">{{post.category.name}}</span>

          <ul>
            <li v-for="tag in post.tags" 
                :key="`tag-key-${tag.id}`"
                class="mb-2">{{tag.name}}</li>
          </ul>

        </div>

        <div class="content_box">
          <p class="">{{post.content}}</p>
        </div>

      </div>

    </div>

</template>

<script>

import {apiUrl} from '../../../config';

export default {
  name: 'PostDetailsComp',
  data(){
    return{
      post: null, 
      apiUrl
    }
  },

  mounted() {
    this.getPostsAPI()
  },

  methods: {
    getPostsAPI(){
      axios.get(this.apiUrl + "/" + this.$route.params.slug)
      .then(r => {
        this.post = r.data;
        console.log('Risposta API "PostDetailsComp"---->',this.post);
      })
    },
  },

  computed:{
    formatDate(){
      const d = new Date(this.post.updated_at);

      let day = d.getDate();
      let month = d.getMonth() + 1;
      const year = d.getFullYear();

      if(day < 10) day = '0' + day;
      if(month < 10) month = '0' + month;

      const date = day+'/'+month+'/'+year;

      return date;
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