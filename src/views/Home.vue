<template>
  <div>
    <div class = "main-box-parent">
      <div>
        <Contacts/>
        <Qualification/>
        <Address/>
        <Work/>
        <Achievement/>
      </div>
      <div>
        <Skills/>
        <Personaldetails/>
        <Projects/>
      </div>
    </div>
    <footer>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Contacts from "../components/Contacts.vue";
import Personaldetails from "../components/Personaldetails.vue";
import Address from "../components/Address.vue";
import Qualification from "../components/Qualification.vue";
import Skills from "../components/Skills.vue";
import Achievement from "../components/Achievement.vue";
import Work from "../components/Work.vue";
import Projects from "../components/Projects.vue";

export default {
  name: 'Home',
  components : {
    Contacts,
    Personaldetails,
    Address,
    Qualification,
    Skills,
    Achievement,
    Work,
    Projects
  }
}
</script>

<style>
.main-box-parent{
  display:flex;
  justify-content : space-between;
  grid-column-gap : 4vw;
}
</style>
