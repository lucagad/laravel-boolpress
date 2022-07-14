<template>
  <div class="container-fluid container_full">

    <div class="herobanner p-3 p-md-5 text-center text-light bg-dark">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">Boolpress Inc</h1>
        <p class="lead fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint eligendi iste natus veniam! Nostrum doloribus repudiandae dolorem, aut amet nihil alias! Ex reiciendis laudantium accusamus ratione, officiis aliquid error?</p>
        <router-link class="btn btn-outline-success" :to="{ name:'blog'}">Leggi i nostri articoli</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeComp',
  
}
</script>

<style lang="scss">

.container_full{
  height: calc(100vh - 83px - 83px);
  overflow-y:scroll;
  padding:0;

  .herobanner{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

</style>