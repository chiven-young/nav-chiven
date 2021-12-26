<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <NavList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavList from '@/components/NavList.vue'

export default {
  name: 'Home',
  components: {
    NavList
  }
}
</script>
