<template>
  <div class="firstSection h-screen w-full">
    <div class="section-content flex h-full justify-between items-center w-full">
      <div class="first-desc w-2/5">
        <h1 class="text-6xl leading-tight mb-8">Next generation digital banking</h1>
        <p class="text-xl mb-8">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <a href="#" class="invite-btn px-8 py-3 text-white text-xl">Request Invite</a>
      </div>
      <div class="phones absolute right-0">
        <div class="random-container relative h-full w-full">
          <img class="image-mockup" src="../assets/images/image-mockups.png" alt="design mockups">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstSection"
}
</script>

<style scoped>
.firstSection {
  background-color: #FAFAFA;
}
.section-content {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.invite-btn {
  background: rgb(49,211,92);
  background: linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%);
  border-radius: 30px;
}
.invite-btn:hover {
  cursor: pointer;
  background: rgb(30,228,82);
  background: linear-gradient(90deg, rgba(30,228,82,1) 0%, rgba(24,200,208,1) 100%);
}
.first-desc h1 {
  color: #2D314D;
}
.first-desc p {
  color: #9698A6;
}
.phones {
  top: -54px;
  background: url('../assets/images/bg-intro-desktop.svg');
  background-position: bottom left;
}
.image-mockup {
  margin-left: 18%;
}
.random-container {
  overflow-x: hidden;
}
</style>