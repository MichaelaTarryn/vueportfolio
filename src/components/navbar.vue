<template>
    <section id="navigation">
        <nav class="navbar navbar-expand-lg navbar-light  fixed-top ">
          <div class="container-fluid">
            <div class="navbar-brand" href="#">MICHAELA</div>
            <button class="navbar-toggler" type="button"  aria-label="Toggle navigation" @click="toggler">
              <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse justify-content-center" :class="{show: opened}" id="navbarNavAltMarkup">
              <div class="navbar-nav px-6">
  
                <router-link to="/" class="nav-link active ">Home</router-link>
                <router-link to="/about" class="nav-link "><i class="bi bi-dot"></i>About Me</router-link>
                <router-link to="/resume" class="nav-link "><i class="bi bi-dot"></i>Resume</router-link>
                <router-link to="/testimonials" class="nav-link "><i class="bi bi-dot"></i>Testimonials</router-link>
                <router-link to="/projects" class="nav-link "><i class="bi bi-dot"></i>Projects</router-link> 
                <router-link to="/contact" class="nav-link "><i class="bi bi-dot"></i>Contact me</router-link>
               <div class="nav-link" id="icon" @click="change"><i class="bi" :class="{'bi-brightness-high': dark, 'bi-moon': !dark}"></i> </div>
              
              
              </div>
            </div>
          </div>
        </nav>
      </section>
</template>


<script>

export default {
  data(){
    return{
      opened: false,
      dark: false,
    }
  },
  methods: {
    toggler(){
      this.opened = !this.opened
    },
    change(){
      this.dark = !this.dark
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon
  }
    }
      
     }
 
}
</script>
<style>
 #navigation{
    font-family: "Open Sans",sans-serif;
    font-size: 1em;
    color: rgb(241, 237, 237);
    text-transform: uppercase;
    padding: 10px 12px 13px;
    z-index: 1;
    background-color:var(--background-color);
    
      }
 
      .navbar{
        
        background-color:var(--background-color);
      }
 nav a:hover {
        color: #2c2e29 !important;
    }

    .navbar-brand {
      color:var(--text-color) !important;
    }


/*  */
.navbar-nav > a:before {
  left: -3px;
  top: 15px;
  z-index: 2;
  color: #eee;
  font-size: 4px;
  content: "\f10c";
  margin-right: 6px;
  position: absolute;

}

.nav-item{
  color:#1a1b19;
}
</style>