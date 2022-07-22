<template>
<section  class=" text-dark py-5" id="portfolio">
<div  class=" container 
    text-black" >
    <h2><center>Projects</center>
      </h2>
    
      <div class="row">

        <div class="col-md-4 " v-for="project in projects" :key="project">

          <div class="img-container clickhere">
            <p>{{project.title}}</p>
            <img class="img-fluid" :src='project.img' height="300px" />

            <div class="showme mx-auto d-flex justify-content-center">
             
                  <router-link class="btn btn-link btn-dark text-white" :to="{ name: 'single', params: { id: project.id } }">  
               View more</router-link>
            </div>
           
        </div>
          </div>
        </div>
       
        
        </div>
       
          
  </section>




</template>

<script>
export default{
    computed:{
        projects(){
          return this.$store.state.projects;   
        }
        
    }
}

</script>
<style scoped>
  h2 {
    text-decoration: underline;
text-decoration-color:rgba(105, 104, 103, 0.888); 
  }
#portfolio{
  background-color:var(--background-color)
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
}
/* SIZES IMAGES */
.projects-container img {
  /* max-height: 400px; */
  /* max-width: 300px; */
  object-fit: cover;
  flex-grow: 1;
  transition: .8s;
  /* opacity: .5; */
}
.img-container {
  position: relative;
  transition: .8s;
  
}

.img-container:hover .showme {
  height: 90px;
    opacity: 1;
      align-items: center;
  justify-content: center;
    transform: translateY(-70px);
}
.img-container:hover img{
  filter: blur(5px);
}
.img-fluid{
    width:400px;
    height:300px;
}

.showme {
    /* width: 380px; */
    height: 90px;
    opacity: 0;
    gap:20px;
    transform: translateY(100%);
    transition: transform 0.5s, opacity 0.5s;
    background-color:rgba(105, 104, 103, 0.888);
}

@media(max-width: 500px) {
  .img-container {
    justify-content: center;
   
  
  }
   #portfolio{
    display: flex;
    justify-content: center;
  }
  h2{
    justify-self: center;
  }

   .img-container:hover .showme {
  height: 70px;
  width:400px;
    opacity: 1;
      align-items: center;
  justify-content: center;
    transform: translateY(-40px);
}
.showme{
  width:300px;
}
.img-fluid{
  margin-right:2px;
}
}

@media(max-width: 800px) {
  .btn {
    width:310px;
    margin-bottom: 10px;
  
  }
  #portfolio{
    display: flex;
    justify-content: center;
  }
  .img-container:hover .showme {
  height: 70px;
    opacity: 1;
      align-items: center;
  justify-content: center;
    transform: translateY(-40px);
}
}

@media(max-width:320px){
 
  .img-container{
    margin-left:50px !important;

    }
  }
  /* .img-container:hover .showme{
   
  } */

</style>