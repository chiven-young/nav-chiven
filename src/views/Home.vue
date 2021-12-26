<template>
  <div class="home">
    <NavList />
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
