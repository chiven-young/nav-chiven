<template>
<n-config-provider :theme="theme" class="app-body">
  <n-layout-header :inverted="inverted" bordered>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <a target="_blank" href="https://www.chiven.net">人寻的网站</a>
    <n-input size="small" round placeholder="搜索" style="max-width: 200px;display:inline-block">
      <template #suffix>
        <n-icon>
          <Search24Regular />
        </n-icon>
      </template>
    </n-input>
    <n-button @click="activate('right')">菜单</n-button>
  </n-layout-header>
  <router-view/>
  <n-drawer v-model:show="active" :width="502" :placement="placement">
    <n-drawer-content title="斯通纳">
      <n-button @click="theme = darkTheme">深色</n-button>
      <n-button @click="theme = null">浅色</n-button>
    </n-drawer-content>
  </n-drawer>
</n-config-provider>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { darkTheme } from 'naive-ui'
import {
  Search24Regular as Search24Regular
} from '@vicons/fluent'

export default defineComponent({
  name: 'App',
  components: {
    Search24Regular
  },
  setup () {
    const active = ref(false)
    const placement = ref('right')
    const activate = (place) => {
      active.value = true
      placement.value = place
    }
    return {
      active,
      placement,
      activate,
      darkTheme,
      theme: ref(null)
    }
  }
})
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-body {
  height: 100vh;
  position: relative;
}
.app-body > .n-layout {
  position: absolute;
  width: 100%;
  height: auto;
  top: 44px;
  left: 0;
  bottom: 0;
}
::v-deep .n-layout-header {
  height: 44px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
</style>
