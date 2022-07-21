<template>
<section class="bg-dark text-light py-5 vh-100 " id="landing">
    <div class="container d-flex justify-content-center align-items-center flex-column h-100">
      <h1>Aspiring Full-Stack Developer</h1>
      <hr>
      <h3 class="h5">For love of coding</h3>
    </div>
  </section>
</template>

<script>
// // @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#landing {
    background: 
      /* top, transparent red, faked with gradient */ linear-gradient(
        rgba(0, 0, 0, 0.45),
        rgba(0, 0, 0, 0.45)
      ),
      /* bottom, image */ url(https://picsum.photos/1920/1200);
    background-size: cover;
    background-attachment: fixed;
    margin-top: 25px;
  }
  
  #landing h1 {
    font-family: "Open Sans",sans-serif;
    font-size: 2em;
  }

#landing hr{
    /* color: #080807 !important; */
    color: var(--text-color);
    width:20%;
    height:1%;
 
  }
</style>
