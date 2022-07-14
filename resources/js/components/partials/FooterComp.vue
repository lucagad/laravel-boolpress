<template>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
    <p class="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <img width="50px" src="img/logo.jpg" alt="Boolpress logo">
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item">
          <router-link class="nav-link px-2 text-muted" :to="{ name:'home'}">Home</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link px-2 text-muted" :to="{ name:'blog'}">Blog</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link px-2 text-muted" :to="{ name:'about'}">Chi siamo</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link px-2 text-muted" :to="{ name:'contacts'}">Contatti</router-link>
      </li>
    </ul>
  </footer>

</template>

<script>
export default {
  name: 'FooterComp'
}
</script>

<style>

</style>