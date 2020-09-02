<template>
  <div class="header">
    <div class="navbar bg-white flex h-8 justify-between items-center w-full">
      <img src="../assets/images/logo.svg" alt="logo">
      <ul class="nav-el flex">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <a class="login" href="#">Request Invite</a>
      <div
        class="hamburger hidden"
        @click="toggleNav"
      >
        &#9776;
      </div>
    </div>
    <div
      class="nav-scroll hidden"
      id="idNav"
      ref="navId"
    >
      <ul class="items">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li><hr></li>
        <li><a href="#">Login</a></li>
        <li class="signup-mobile"><a href="#">Sign Up</a></li>
      </ul>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>