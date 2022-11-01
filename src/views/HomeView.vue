<template>
  <div class="container">

    <nav id="navbar-example2" class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
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
      <h4 id="two">two</h4>
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
    </div>

  </div>
</template>


<style>

#content {
  height: 400px;
  overflow-y: scroll;
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
