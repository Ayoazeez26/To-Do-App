<template>
  <div class="header bg-white fixed w-full z-20">
    <div class="navbar flex h-10 md:h-20 justify-between items-center">
      <img src="../assets/images/logo.svg" alt="logo">
      <ul class="nav-el hidden md:flex h-full">
        <li class="mr-3 h-full flex items-center">Home</li>
        <li class="mr-3 h-full flex items-center">About</li>
        <li class="mr-3 h-full flex items-center">Contact</li>
        <li class="mr-3 h-full flex items-center">Blog</li>
        <li class="h-full flex items-center">Careers</li>
      </ul>
      <a class="invite hidden md:flex px-8 py-3 text-white" href="#">Request Invite</a>
      <div
        class="hamburger md:hidden"
        @click="toggleNav"
      >
        <img class="pointer md:hidden" src="../assets/images/icon-hamburger.svg" alt="hamburger">
      </div>
    </div>
    <div
      class="nav-scroll bg-white md:hidden"
      id="idNav"
      ref="navId"
    >
      <ul class="items flex flex-col justify-between items-center">
        <li class="mt-6 text-center">Home</li>
        <li class="mt-6 text-center">About</li>
        <li class="mt-6 text-center">Contact</li>
        <li class="mt-6 text-center">Blog</li>
        <li class="mt-6 text-center">Careers</li>
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
  border-bottom: 5px solid #FFF;
}
.nav-el li:hover {
  color: #2D314D;
  border-bottom: 5px solid #2EC696;
  cursor: pointer;
}
.invite {
  background: rgb(49,211,92);
  background: linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%);
  border-radius: 30px;
}
.invite:hover {
  cursor: pointer;
  background: rgb(30,228,82);
  background: linear-gradient(90deg, rgba(30,228,82,1) 0%, rgba(24,200,208,1) 100%);
}
.nav-scroll {
  position: absolute;
  top: 60px;
  width: 90%;
  height: 280px;
  margin-left: 5%;
  border-radius: 10px;
  text-align: center;
  color: #2D314D;
  font-size: 18px;
  transition: all .3s cubic-bezier(.03, .84, .18, 1.01);
  z-index: 99;
  -webkit-box-shadow: 0px 56px 241px 20px rgba(66,66,66,0.71);
  -moz-box-shadow: 0px 56px 241px 20px rgba(66,66,66,0.71);
  box-shadow: 0px 56px 241px 20px rgba(66,66,66,0.71);
}

@media screen and (max-width: 768px) { 
  .navbar {
    width: 90%;
  }
}

</style>