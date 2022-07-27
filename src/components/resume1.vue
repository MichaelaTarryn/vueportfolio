<template>
   <section class=" text-dark py-5" id="resume">
    <div class="container">
      <h2 class="section-title"><center> Resume</center></h2>
      <div class="row">
        <div class="col-md-6" v-bind:class="{ active: index === 0 }"
            v-for="(resume, index) in resume"
            :key="index">
          <!-- 2022 -->
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            class="experience-container"
            
          >
            <h5>{{ resume.date }}</h5>

            <i>{{ resume.description }}</i>
            <ul v-for="(skill, index) in resume.skills" :key="index">
              <li>{{ skill }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    AOS.init();
  },
  computed: {
    resume() {
      return this.$store.state.resume;
    },
  },
};
</script>

<style scoped>
.section-title {
    text-decoration: underline;
text-decoration-color:rgba(105, 104, 103, 0.888); 
  }
#resume{
 background-color:var(--background-color);
}
.experience-container {
  border-left: 3px solid rgb(87, 84, 84);
  padding-left: 20px;
  position: relative;
}

.experience-container::before {
  position: absolute;
  left: -10px;
  top: 0;
  display: block;
  content: "";
  width: 20px;
  height: 20px;
  border: 3px solid rgb(14, 10, 10);
  border-radius: 50%;
  background-color: rgba(5, 5, 5, 1);
}
</style>