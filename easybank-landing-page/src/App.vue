<template>
  <div id="app">
    <Header />
    <FirstSection />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FirstSection from './components/FirstSection.vue'

export default {
  name: 'App',
  components: {
    Header,
    FirstSection
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap');
#app {
  font-family: 'Public Sans', Helvetica, Arial, sans-serif;
}
</style>
