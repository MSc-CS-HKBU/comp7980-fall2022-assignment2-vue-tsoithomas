<template>
  <h1 name="">COMP7270 Web and Mobile Programming</h1>

  <div class="container">

    <nav id="navbar-example2" class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Online Survey Form</a>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#survey">survey</a>
        </li>
        <li class="nav-item chart">
          <a class="nav-link" href="#one">one</a>
        </li>
        <li class="nav-item chart">
          <a class="nav-link" href="#two">two</a>
        </li>
        <li class="nav-item chart">
          <a class="nav-link" href="#three">three</a>
        </li>
      </ul>
    </nav>
    <div id="content">


      <div id="survey" class="row justify-content-md-center section">
        <div class="col col-lg-8">
          <div class="card">
            <div class="card-header text-center">
              survey
            </div>
            <div class="card-body text-start">

              <fieldset class="form-group mb-3">
                <div class="row">
                  <legend class="col-form-label col-sm-3 pt-0">Gender</legend>
                  <div class="col-sm-9">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gender" id="gridRadios1" value="m" checked>
                      <label class="form-check-label" for="gridRadios1">Male</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gender" id="gridRadios2" value="f">
                      <label class="form-check-label" for="gridRadios2">Female</label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div class="form-group row mb-3">
                <label for="inputEmail3" class="col-sm-3 col-form-label">Experience (years)</label>
                <div class="col-sm-9">
                  <div class="input-group">
                    <input type="number" class="form-control" name="experience" id="experience" min="0" max="100" placeholder="1" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                      <div class="input-group-text" id="basic-addon2">year(s)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group row mb-3">
                <div class="col-sm-3">Preferred language</div>
                <div class="col-sm-9">
                  <select class="form-control form-select" name="language">
                    <option value="" disabled selected>Select your preferred language</option>
                    <option>C++</option>
                    <option>Java</option>
                    <option>JavaScript</option>
                    <option>Objective C</option>
                    <option>PHP</option>
                    <option>Python</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-3">
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-primary" @click="myMethod">Submit Data & View Charts</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div id="one" class="row justify-content-md-center section">
        <div class="col col-lg-8">
          <div class="card">
            <div class="card-header text-center">
              chart one
            </div>
            <div class="card-body text-start">


            </div>
          </div>
        </div>
      </div>


      <div id="two" class="row justify-content-md-center section">
        <div class="col col-lg-8">
          <div class="card">
            <div class="card-header text-center">
              chart two
            </div>
            <div class="card-body text-start">


            </div>
          </div>
        </div>
      </div>

      <div id="three" class="row justify-content-md-center section">
        <div class="col col-lg-8">
          <div class="card">
            <div class="card-header text-center">
              chart three
            </div>
            <div class="card-body text-start">


            </div>
          </div>
        </div>
      </div>



    </div>

  </div>
</template>


<style>
body {
  background-color:slategray;
}

nav.navbar {
  position: sticky;
  top: 0px;
  padding: 10px 30px;
  background-color:lightsteelblue !important;
  border-top: 12px solid rgb(32,32,32);
  color: rgb(32,32,32);
  z-index: 100;
}

.navbar-brand {
  text-transform:uppercase;
}

li.nav-item {
  font-variant: small-caps;
}

h1 {
  background: rgb(59,103,158);
  background: -moz-linear-gradient(top,  rgba(59,103,158,1) 0%, rgba(43,136,217,1) 50%, rgba(32,124,202,1) 51%, rgba(125,185,232,1) 100%);
  background: -webkit-linear-gradient(top,  rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%);
  background: linear-gradient(to bottom,  rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3b679e', endColorstr='#7db9e8',GradientType=0 );

  color: white;
  padding: 20px;
  font-weight: 700;
  opacity: 0.8;
  margin-bottom: 0;
}

#content {
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 30px;
  margin-bottom: 20px;  
  
  min-height: 40rem;
  padding-bottom: 120px;
}

.container {
  padding: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.35);
  -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.35);
  -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.35);
}

.question {
  min-height: 35rem;
}

.section {
  padding-top: 80px;
}

.card-header {
  font-variant: small-caps;
}

.card-body {
  min-height: 15rem;
}

.chart {
  /* display: none; */
}

.input-group-append .input-group-text {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}


</style>




<script>

// @ is an alias to /src
//import HomeForm from '@/components/HomeForm.vue'
import { ref } from "vue";

export default {
  name: 'HomeView',
  components: {
    //HomeForm
  },
  
  methods: {
    myMethod () {
      var fetch_status;

      fetch('/api/submit', {
          method: "POST",
          // Set the headers
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          // Set the post data
          body: JSON.stringify({
              gender : document.querySelector('input[name="gender"]:checked').value,
              experience : document.querySelector('input[name="experience"]').value,
              language : document.querySelector('select[name="language"]').value
          })
      })
      .then(function (response) {
          // Save the response status in a variable to use later.
          fetch_status = response.status;
          // Handle success
          // eg. Convert the response to JSON and return
          return response.json();
      }) 
      .then(function (json) {
          // Check if the response were success
          if (fetch_status == 201) {
              // Use the converted JSON
              console.log(json);
          }
      })
      .catch(function (error){
          // Catch errors
          console.log(error);
      }); 
    }
  },

  setup() {
      const booking = ref({});
      

      return {
          booking
      }
  }
}
</script>
