<template>
  <section class="bg-dark text-light py-5 " id="landing">
    <div
      class="container d-flex justify-content-center align-items-center flex-column h-100"
    >
      <h1>Aspiring Full-Stack Developer</h1>
      <hr />
      <br />
      <br />
      <div class="container">
        <div class="row d-flex justify-content-center align-content-center">
          <!-- <div id="rest"> -->
            <div id="icons"><i class="fa-solid fa-utensils"></i> eat</div>
            <div id="icons1"><i class="fa-solid fa-bed"></i>sleep</div>
            <div id="icons2"><i class="fa-solid fa-code"></i>code</div>
            <div id="icons2"><i class="fa-solid fa-repeat"></i> repeat</div>
          <!-- </div>  -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// // @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
#landing {
  background: 
      /* top, transparent red, faked with gradient */ linear-gradient(
      rgba(253, 253, 253, 0.45),
      rgba(253, 250, 250, 0.45)
    ),
    /* bottom, image */ url();
  background-size: cover;
  background-attachment: fixed;
  margin-top: 25px;
  min-height: 100vh;
  font-family: 'Lobster', cursive;
}
#rest {
  width: 900px;
  display: flex;
  justify-content: space-between;
  color: white;
}
#icons {
  font-size: 82px;
  max-width: 190px;
  color: white;
}
#icons1 {
  font-size: 82px;
  max-width: 190px;
}
#icons2 {
  font-size: 82px;
  max-width: 190px;
  color: white;
}

#landing h1 {
  font-size: 2em;
}

#landing hr {
  /* color: #080807 !important; */
  color: var(--text-color);
  width: 20%;
  height: 1%;
}
</style>
