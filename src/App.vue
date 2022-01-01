<template>
<n-config-provider :theme="theme" class="app-body">
  <n-layout-header :inverted="inverted" bordered>
    <n-switch v-model:value="collapsed" />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <n-button @click="activate('right')">菜单</n-button>
  </n-layout-header>
  <n-layout has-sider>
    <n-layout-sider
      collapse-mode="transform"
      :collapsed-width="0"
      :width="268"
      :show-collapsed-content="false"
      show-trigger="arrow-circle"
      bordered
      :collapsed="!collapsed"
      @collapse="collapsed = false"
      @expand="collapsed = true"
      content-style="padding: 16px;"
      class="index-siderbar"
    ></n-layout-sider>
    <n-layout-content content-style="width: 100%">
      <router-view/>
    </n-layout-content>
  </n-layout>
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

export default defineComponent({
  name: 'App',
  components: {
    // Home,
  },
  setup () {
    const active = ref(false)
    const placement = ref('right')
    const activate = (place) => {
      active.value = true
      placement.value = place
    }
    return {
      collapsed: ref(true),
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
  top: 44px;
  width: 100%;
  height: auto;
  left: 0;
  bottom: 0;
}
.n-layout-header {
  height: 44px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
}
</style>
