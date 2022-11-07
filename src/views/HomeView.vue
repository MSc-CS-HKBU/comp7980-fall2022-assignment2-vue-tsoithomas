<template>
  <h1>COMP7270 Web and Mobile Programming</h1>

  <div class="container">

    <nav id="navbar-example2" class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Online Survey Form</a>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#one">one</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#two">two</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#three">three</a>
        </li>
      </ul>
    </nav>
    <div id="content" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
      <h4 id="one">one</h4>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <h4 id="two">two</h4>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <h4 id="three">three</h4>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
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
}

.container {
  padding: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.35);
  -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.35);
  -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.35);

}

</style>




<script>

// @ is an alias to /src
//import HomeForm from '@/components/HomeForm.vue'

export default {
  name: 'HomeView',
  components: {
    //HomeForm
  }
}
</script>
