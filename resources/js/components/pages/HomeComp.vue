<template>
  <div class="container">
    <div class="post_container">

      <h2>Lista Post</h2>
      <ul>
        <li v-for="post in posts" :key="post.id"> 
          <h4>{{post.title}}</h4>
          <h5>Contenuto:</h5>
          <p>{{post.content}}</p>
          <h5>Categoria:</h5>
          <p>{{post.category.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComp'
}
</script>

<style>

</style>