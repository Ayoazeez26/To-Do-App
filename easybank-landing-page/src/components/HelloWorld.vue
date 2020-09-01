<template>
  <div class="hello bg-blue">
    <h1>{{ msg }}</h1>
    <p class="text-center">
      This is a tailwind css test.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
