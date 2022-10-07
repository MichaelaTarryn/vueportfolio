
<template>
 <Navbar/>
<!-- <div class="jj">
  <div id="navbar">
 
</div>
</div> -->
<router-view />
<Footer/>
</template>
<script>
import Navbar from './components/navbar.vue';
import  Footer from './components/footer.vue';
export default {
  // name:'navbar',
  // components: {Navbar},
components: {
    Navbar,
    Footer
  },
};
</script>

<style >

@import url('https://fonts.googleapis.com/css2?family=Alkalami&family=Barlow+Condensed:ital,wght@0,600;1,900&family=Lobster&display=swap');
/* *{
  background: rgba(0,0,0,0.5);
} */
:root{
   --background-color:#fafafa;
  --text-color:#212121;  
}
.dark-theme{
    --background-color:#000106;
  --text-color:#fff;   
}

p, li, h1, h2, h3, h4, h5, h6, span, input,u, a, div{
  color: var(--text-color) !important;
 /* background-color: var(--background-color) */
}
 /* p, li, h3, h4, h5, h6, span, input, a{
 background-color: var(--background-color)
}  */

h2{
  font-family: 'Lobster', cursive;
}
h6{
  font-family: 'Barlow Condensed', sans-serif;
}

  body {
    overflow-x: hidden; 
     /* color:var(--text-color);
  background:var(--background-color); */
  }

  
</style>
