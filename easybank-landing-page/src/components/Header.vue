<template>
  <div class="header bg-white fixed w-full z-20">
    <div class="navbar flex h-16 justify-between items-center">
      <img src="../assets/images/logo.svg" alt="logo">
      <ul class="nav-el flex h-full">
        <li class="mr-3 h-full flex items-center">Home</li>
        <li class="mr-3 h-full flex items-center">About</li>
        <li class="mr-3 h-full flex items-center">Contact</li>
        <li class="mr-3 h-full flex items-center">Blog</li>
        <li class="h-full flex items-center">Careers</li>
      </ul>
      <a class="invite px-8 py-3 text-white" href="#">Request Invite</a>
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
.navbar {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.nav-el li {
  color: #9698A6;
}
.nav-el li:hover {
  color: #2D314D;
  border-bottom-width: 5px;
  border-bottom-style: solid;
  border-bottom-color: rgb(49,211,92);
}
.invite {
  background: rgb(49,211,92);
  background: linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%);
  border-radius: 30px;
}
</style>