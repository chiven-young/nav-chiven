<template>
  <div class="home">
    <WebNav />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import WebNav from './web-nav/index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    WebNav,
  },
  setup () {
    
    return {
      
    }
  }
})
</script>
