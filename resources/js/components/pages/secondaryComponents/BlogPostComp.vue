<template>
  <div class="card">
    <img src="img/placeholder.jpg" alt="Image Placeholder">

    <div class="card_body_custom d-flex flex-column justify-content-center">

      <div class="title_box">
        <span class="badge badge-info mb-2">{{post.category.name}}</span>
        <h6 class="card-title">{{post.title}}</h6>
      </div>
      <div class="card_content">
        <p>{{this.shortContent}}</p>
      </div>
      
      <a type="button" class="btn btn_custom">
        <router-link :to="{name:'dettagli', params:{slug: post.slug}}">Leggi</router-link>
      </a>

    </div>

  </div>
</template>

<script>
export default {
  name: 'BlogPostComp',
  props:{
    post: Object
  },
  computed:{
    shortContent(){
      return this.post.content.substr (0,40) + "....."
    }
  }
}
</script>

<style lang="scss">

@import 'resources/sass/front/_variables.scss';

.card{
  width: 320px;
  height: 380px;
  overflow: hidden;
  margin: 6px;
  position: relative;

  .card_body_custom{
    min-height: 1px;
    padding: 1.25rem;

    .card_content{
      font-size: 12px;
    }

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