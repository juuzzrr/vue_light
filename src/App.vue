<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" active-class="current"></router-link>
      <router-link to="/on" active-class="current1" v-if="currentOn"> On</router-link> |
      <router-link to="/off" active-class="current2">Off</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {  
  el: "#app",
  method: {
    
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  }
.current {
  background-image:url("./assets/off.jpg");
}
.current1{
  background-image:url("./assets/on.jpg");
}
.current2{
  background-image:url("./assets/off.jpg");
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
