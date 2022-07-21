<template>
<section class="text-dark  py-5 " id="single">
<div class="container">
<div class="row">
    <h1>  {{projects.title}}</h1>
    <div class="col-md-12 " v-if="projects">
         <img class="img-fluid mx-auto d-flex justify-content-center"  :src="projects.img" alt="">
         </div>
            <p>
                Skills Used: 
            </p>
                <div class="col-md-6" v-for="(skills, index) in projects.skills" :key="index">
             <li>{{ skills }}</li>
        </div>
        <br>
        <br>
        <p>Links:</p>
        <div class="col-md-6"  id="links" v-for="(link, index) in projects.link" :key="index">
           
           {{link}}
        </div>

</div>

</div>
</section>

</template>

<script>
export default{
    props:['id'],
    computed:{
    projects(){
        console.log(this.$store.state.projects.filter(project => project.id == this.id)[0]);
      return this.$store.state.projects.filter(project => project.id == this.id)[0]
    }
  }
}

</script>

<style scoped>

#single{
 background-color:var(--background-color) ;
}
#single{
    height:100vh;
}
.img-fluid{
    height:50vh;
}

 h1{
    display:flex;
    justify-content:center;
 }

 @media(max-width:320px){
  
   #single{
    margin-bottom: 50px;
    width:200px;
   }

}
</style>