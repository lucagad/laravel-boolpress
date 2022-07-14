<template>
    <header class="d-flex flex-wrap justify-content-between align-items-center py-3 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img width="50px" src="img/logo.jpg" alt="Boolpress logo">
        <span class="mx-2 fs-4">Boolpress</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name:'home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name:'blog'}">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name:'about'}">Chi siamo</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name:'contacts'}">Contatti</router-link>
        </li>
      </ul>
    </header>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style lang="scss" scoped>

@import 'resources/sass/front/_variables.scss';


  header{
    
    a{
      color: #00d25f;
    }

    .nav-link.active{
      color: #fff;
      background-color: $primary-color;
    }
  }
  
</style>