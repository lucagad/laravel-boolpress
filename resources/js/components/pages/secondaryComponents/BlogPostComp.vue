<template>
  <div class="card">
    <img src="img/placeholder.jpg" alt="Image Placeholder">

    <div class="card-body d-flex flex-column justify-content-center">
      <div class="title_box">
        <h5 class="card-title">{{post.title}}</h5>
        <span class="badge badge-info mb-2">{{post.category.name}}</span>
      </div>
      <div class="card_text_container">
        <p class="card-text">{{post.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostComp',
  props:{
    post: Object
  }
}
</script>

<style lang="scss">

.card{
  width: 18rem;
  height: 25rem;
  overflow: hidden;
  margin: 6px;


  .card_text_container{
    width: 100%;
    height: 50%;
    overflow-y: scroll;
  }
}

</style>