<template>
  <div id="app">
    <div>
      <HelloWorld/>
    </div>
    <div id="nav">
      <ul>
        <li><router-link to="/">Home</router-link>|</li>
        <li><router-link to="/contacts">Contacts</router-link>|</li>
        <li><router-link to="/Personaldetails">Personals Details</router-link>|</li>
        <li><router-link to="/Address">Address</router-link>|</li>
        <li><router-link to="/Qualification">Qualification</router-link>|</li>
        <li><router-link to="/Projects">Projects</router-link>|</li>
        <li><router-link to="/Skills">Skills and Other</router-link>|</li>
        <li><router-link to="/Achievement">Achievement</router-link>|</li>
        <li><router-link to="/Work">Work and Experience</router-link></li>
      </ul>
    </div>
    <router-view/>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Footer from "./components/Footer.vue";

  export default {
    components : {
      HelloWorld,
      Footer
    }
  }
</script>
<style>

*{
  font-family: sans-serif;
}
#nav {
  padding: 3vw 0;
}
#nav ul{
  display: flex;
  justify-content: space-between;
}
#nav li{
  list-style-type: none;
}

#nav a {
  color: #2c3e50;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 1.2vw;
  padding: 0 1vw 0 0;
}
#nav ul li:last-child a:last-child{
  padding: 0px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
