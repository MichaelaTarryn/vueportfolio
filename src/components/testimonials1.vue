<template>
  <section class=" text-black py-5" id="testimonials">
    <div class="container">
      <h2 class="section-title">
        <center>Testimonial Carousel</center> 
      </h2>
      <br />
      <section id="testimonials" class="vh-80">
        <div class="container text-center p-5">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active circle"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                class="circle"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                class="circle"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
                class="circle"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
                class="circle"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
                class="circle"
              ></button>
            </div>
            <div class="carousel-inner pb-5">

                <div class="carousel-item" v-bind:class="{ active: index === 0 }" v-for="(testimonial,index) in testimonials" :key="index" >
                    <img
                  :src="testimonial.img"
                  class="rounded-circle"
                  alt=""
                />
                <p>{{ testimonial.name }}</p>
                <p>{{ testimonial.testimonial }}</p>
                </div>
              
               
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
 computed:{
        testimonials(){
          return this.$store.state.testimonials;   
        }
        
    }
};
</script>

<style scoped>

#testimonials{
  background-color:var(--background-color);
  font-family: 'Lobster', cursive;
}
.carousel-inner img{
  aspect-ratio: 1;
  object-fit: cover;
  width: 320px;
}

  .circle{
    width: 10px !important;
    height: 10px !important;
    aspect-ratio: 1 !important;
    border-radius: 50% !important;
    border-color: #414241!important;
    color:black !important ;
}
@media(max-width:320px){
   
.carousel-inner img{
  width:120px !important
}
  }
  .section-title {
    text-decoration: underline;
text-decoration-color:rgba(105, 104, 103, 0.888); 
  }
</style>