<template>
  <div class="container-fluid container_full">

    <div class="p-3 p-md-5 text-center text-light bg-dark">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">Contatti</h1>
        <p class="lead fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ullam libero numquam doloribus incidunt consectetur fugit asperiores. Obcaecati, magnam unde.
        </p>
      </div>
    </div>

    <div class="text_container">

      <div class="mx-2 my-3 text-center">
        <h2>Contatti</h2>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsComp'
}
</script>

<style lang="scss">

.container_full{
  height: calc(100vh - 83px - 83px);
  overflow-y:scroll;
  padding:0;
}

</style>