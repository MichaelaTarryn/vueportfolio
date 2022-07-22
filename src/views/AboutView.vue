<template>
 <section class=" text-dark  py-5  " id="about">
    <div class="container">
      <h2 class="section-title"><center>About Me</center></h2>

      <div class="row">
        <div class="col-md-4">
         <img class="img-fluid"  :src="this.$store.state.profileUrl" alt="">
        </div>
        <div class="col-md-8 ">
          <div class="row p-1">
            <div class="col-md-12">
              <p>
                I'm a very private and shy person who is also a very good team player. I am always willing to learn and grow as a person, spiritually and physically. My Passion for IT started when I was 5 years  been hooked  ever since.  I enjoying problem solving , why I choose IT. I always been infront of computer , its like a big puzzle , always learning something new everyday , as technology envolve as do I .

              </p>
            </div>
            
          </div>
          <div class="row p-1">
            <div class="col-md-6">Born:</div>
            <div class="col-md-6">22/01/2000</div>
          </div>
          <div class="row p-1">
            <div class="col-md-6">Gender:</div>
            <div class="col-md-6">female</div>
          </div>
          <div class="row p-1">
            <div class="col-md-6">Address:</div>
            <div class="col-md-6">4 Bluegum Street Bontehewuel</div>
          </div>
          <div class="row p-1">
            <div class="col-md-6">phone:</div>
            <div class="col-md-6">076 433 3345</div>
          </div>
          <div class="row p-1">
            <div class="col-md-6">Language</div>
            <div class="col-md-6">English</div>
          </div>
          <div class="row p-1">
            <div class="col-md-6">Nationality</div>
            <div class="col-md-6">South African</div>
          </div>
          <div>
            <p class="d-flex ">
            </p>
             <div class="mh-professional-skill justify-content-between">
                    <h6> HTML</h6>
                   
                    <div class="each-skills">
                        <div class="candidates">
                            <div class="parcial">
                                <div class="info">
                                    <div class="percentage-num">
                                        100%
                                    </div>
                                    <div class="progressBar">
                                        <div class="percentagesm" style="width:100%;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
          <br>

          <div>
      
              <div class="mh-professional-skill">
                   <h6>CSS</h6> 
                    <div class="each-skills">
                        <div class="candidates">
                            <div class="parcial">
                                <div class="info">
                                    <div class="percentage-num">
                                        100%
                                    </div>
                                    <div class="progressBar">
                                        <div class="percentagesm" style="width:100%;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
          <br>
          <div>
            
          <div class="mh-professional-skill">
                    <h6>Bootstrap</h6>
                    <div class="each-skills">
                        <div class="candidates">
                            <div class="parcial">
                                <div class="info">
                                    <div class="percentage-num">
                                        95%
                                    </div>
                                    <div class="progressBar">
                                        <div class="percentagesm" style="width:95%;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
          <br>
          <div>
            <div class="mh-professional-skill">
                    <h6>Javascript</h6> 
             
                    <div class="each-skills">
                        <div class="candidates">
                            <div class="parcial">
                                <div class="info">
                                    <div class="percentage-num">
                                        86%
                                    </div>
                                    <div class="progressBar">
                                        <div class="percentagesm" style="width:86%;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
          <div class="row p-2  mt-4">
            <div class="col-md-6">
              <span><a class="btn btn-link text-dark" href="https://app.netlify.com/teams/mward7006/overview">live</a></span>
            </div>
            <div class="col-md-6">
             <span><a class="btn btn-link text-dark" href="https://github.com/MichaelaTarryn">Github</a></span> 
            </div>
          </div>


        </div>
        <br>
        <br>
        <br>
        <div class="row">
            <h2> <center><u>Soft Skills</u></center></h2>
            <div class="col-md-4" @mouseover="animate1">
        
                <h4>Patients</h4>
                <div id="container2" ref="bar1" style="position: relative">
                    <span class="percent">100%</span>
                </div>
            </div>
            <div class="col-md-4" @mouseover="animate2">
                <h2></h2>
                <h4>Teamwork</h4>
                <div id="container3" ref="bar2" style="position: relative">
                    <span class="percent">100%</span>
                </div>
            </div>
            <div class="col-md-4" @mouseover="animate3">
                <h2></h2>
                <h4>Active Listening</h4>
                <div id="container4" ref="bar3" style="position: relative">
                    <span class="percent">100%</span>
                </div>
            </div>
            <div class="row">
                
                <div class="col-md-4" @mouseover="animate4">
                <h4>Active Listening</h4>
                <div id="container5" ref="bar4" style="position: relative">
                    <span class="percent">100%</span>
                </div>
            </div>
            <div class="col-md-4" @mouseover="animate5">
                <h4>Reliable</h4>
                <div id="container6" ref="bar5" style="position: relative">
                    <span class="percent">100%</span>
                </div>
            </div>
            <div class="col-md-4" @mouseover="animate6">
                <h4>Time-Management</h4>
                <div id="container7" ref="bar6" style="position: relative">
                    <span class="percent">100%</span>
                </div>
            </div>
            </div>
        </div>
      </div>

    </div>
  </section>     
</template>
<script>
import ProgressBar from 'progressbar.js'
export default {
    data(){
        return{
            bar1: null,
            bar2: null,
            bar3: null,
            bar4:null,
            bar5:null,
            bar6:null,
        }
    },
    mounted(){
        this.bar1 = new ProgressBar.Circle(container2, {
                                        strokeWidth: 3,
                                        easing: 'easeInOut',
                                        duration: 2000,
                                        color: 'rgba(105, 104, 103, 0.888)',
                                        trailColor: ' #ddddd2',
                                        trailWidth: 5,
                                        svgStyle: null
                                    });
                                    this.bar2 = new ProgressBar.Circle(container3, {
                                        strokeWidth: 3,
                                        easing: 'easeInOut',
                                        duration: 2000,
                                        color: 'rgba(105, 104, 103, 0.888)',
                                        trailColor: ' #ddddd2',
                                        trailWidth: 5,
                                        svgStyle: null
                                    });
                                     this.bar3 = new ProgressBar.Circle(container4, {
                                        strokeWidth: 3,
                                        easing: 'easeInOut',
                                        duration: 2000,
                                        color: 'rgba(105, 104, 103, 0.888)',
                                        trailColor: ' #ddddd2',
                                        trailWidth: 5,
                                        svgStyle: null
                                    });
                                     this.bar4 = new ProgressBar.Circle(container5, {
                                        strokeWidth: 3,
                                        easing: 'easeInOut',
                                        duration: 2000,
                                        color: 'rgba(105, 104, 103, 0.888)',
                                        trailColor: ' #ddddd2',
                                        trailWidth: 5,
                                        svgStyle: null
                                    });
                                    this.bar5 = new ProgressBar.Circle(container6, {
                                        strokeWidth: 3,
                                        easing: 'easeInOut',
                                        duration: 2000,
                                        color: 'rgba(105, 104, 103, 0.888)',
                                        trailColor: ' #ddddd2',
                                        trailWidth: 5,
                                        svgStyle: null
                                    });
                                    this.bar6 = new ProgressBar.Circle(container7, {
                                        strokeWidth: 3,
                                        easing: 'easeInOut',
                                        duration: 2000,
                                        color: 'rgba(105, 104, 103, 0.888)',
                                        trailColor: ' #ddddd2',
                                        trailWidth: 5,
                                        svgStyle: null
                                    });
                                    
                                    
    },
    methods: {
        animate1(){
            this.bar1.animate(1.0); 
        },
        animate2(){
            this.bar2.animate(1.0); 
        },
        animate3(){
            this.bar3.animate(1.0); 
        },
        animate4(){
            this.bar4.animate(1.0); 
        },
        animate5(){
            this.bar5.animate(1.0); 
        },
        animate6(){
            this.bar6.animate(1.0); 
        },

    }
}
</script>
<style scoped>
.section-title {
    text-decoration: underline;
text-decoration-color:rgba(105, 104, 103, 0.888); 
  }
#about{
    background-color:var(--background-color)
}

.percent{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}
.mh-skills .mh-professional-skill{
    padding-right:80px;
    color:rgb(34, 33, 33);

}
.candidates .parcial .info{
position: relative;

}


.candidates .parcial .info .name{
    position: absolute;
    top:0;
    left:0;
    font-size: 15px;
    font-weight: 400;
    opacity: 0.9; 
    }
    
    .candidates .parcial .info .percentage-num{
        position: absolute;
        top:10px;
        right:0;
        font-size: 14px;
        font-weight:normal; 
        }

        .candidates .parcial .progressBar{
            position: relative;
            width:100%;
            height: 7px;
            margin: 30px 0 2px;
            border-radius: 10px;
            background-color: rgb(57, 61, 60);
            }
     
            .candidates .parcial .percentagesm{
                position: absolute;
                top:0;
                left:0;
             height: 7px;
          border-top-left-radius:10px;
             border-bottom-left-radius:10px;
         border-bottom-right-radius:10px;
         background: #ddddd2;
      -webkit-transition:3s all;
      -webkit-animation-duration:1.9s ;
       -webkit-animation-name:animationProgress;

        

            }
            .precentual{
                animation-name: animationProgress;
            }
          
            @keyframes animationProgress{
                from{
                    width: 0;
                }
            }
.btn{
  background-color: 
  rgb(83, 77, 77);
  width: 150px;
   text-decoration: none;
  }

  span :hover{
    color: rgb(16, 15, 15) !important;
    background-color: white;
    border: 3px solid black;
  }
.img-fluid{
  height:97vh;
}

#container2 {
  margin: 20px;
  width: 200px;
  height: 200px;
}
#container3 {
  margin: 20px;
  width: 200px;
  height: 200px;
}

#container4 {
  margin: 20px;
  width: 200px;
  height: 200px;
}
#container5 {
  margin: 20px;
  width: 200px;
  height: 200px;
}
#container6 {
  margin: 20px;
  width: 200px;
  height: 200px;
}
#container7 {
  margin: 20px;
  width: 200px;
  height: 200px;
}

@media(max-width: 500px) {
  .btn {
    width:310px;
    margin-bottom: 2px;
  
  }
}

@media(max-width: 800px) {
  .btn {
    width:310px;
    margin-bottom: 10px;
  
  }
}
</style>