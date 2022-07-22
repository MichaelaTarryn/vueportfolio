<template>
  <section class=" text-dark py-5 mt-3" id="contact">
    <div class="container1">
        <h2>
          <center>Feel free to contact me for
          information</center>
        </h2>
      
      <div class="row">
        <div class="col-12">
          <div class="container text-black-50 w-60">
            <form
              action="https://formspree.io/f/xbjwqjvk"
              method="POST"
              target="_blank"
            >
              <div class="container">
                <div class="row">
                  <div class="col-md-8">
                    <!-- name  -->
                    <label for="name" class="col-form-label-lg">
                      Full Name</label
                    >
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="enter your full name"
                      class="form-control" required
                    />
                    <!-- email -->
                    <label for="name" class="col-form-label-lg"> Email</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="enter your email"
                      class="form-control" required
                    />
                    <!-- message -->
                    <div class="d-flex  my-3 h-50">
                        <label for="message" class="col-form-label-lg align-self-center"
                          >Message:
                        </label>
                        <textarea name="comment" id="message" class="measage" required></textarea>
                    </div>
                    <div class="buttons">
                      <center>
                        <input
                          type="Submit"
                          value="Submit"
                          class="btn"
                        />
                      </center>
                    </div>
                  </div>

                  <div class="col-md-4 py-5">
                    <p class="help">
                      <i class="bi bi-house-fill">
                        4 bluegum street Bontehewuel</i
                      >
                    </p>
                    <p class="help">
                      <i class="bi bi-telephone-fill"> Phone:067 054 3464</i>
                    </p>
                    <p class="help">
                      <i class="bi bi-envelope"> mward7006@gmail.com</i>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>
<style scoped>
  h2 {
    text-decoration: underline;
text-decoration-color:rgba(105, 104, 103, 0.888); 
  }
#contact{
  background-color:var(--background-color);
}
.container{
  background-color: var(--background-color);
}

.container1{
    margin-bottom: 100px;
}
.container1 h2{
    /* margin-left: 153px; */
}
.buttons{
  width:80px;
  background-color:rgba(105, 104, 103, 0.888) ;
  color:black;
}

#message{
  height: 150px;
  width:100vw;
}
@media(max-width: 500px) {
   .container1 h2{
    font-size: medium;
    margin-left: 2px;
  }
  .buttons{
    width:100px;
  }
  .help{
   margin-top:20px;
   
  }
  
}

@media(max-width: 800px) {
 #message{
  width:700px;
 }
  .help{
   margin-top:20px;
   
  }

}

</style>
