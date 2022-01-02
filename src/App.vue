<template>
<n-config-provider :theme="theme" class="app-body">
  <n-layout-header :inverted="inverted" bordered>
    <img src="../src/assets/logo.png">
    <n-button quaternary round>
      <router-link to="/">Home</router-link>
    </n-button>
    <n-button quaternary round>
      <router-link to="/about">About</router-link>
    </n-button>
    <n-button quaternary round>
      <a target="_blank" href="https://www.chiven.net">人寻的网站</a>
    </n-button>
    <n-input size="small" round placeholder="搜索" style="max-width: 200px;display:inline-block">
      <template #suffix>
        <n-icon>
          <Search24Regular />
        </n-icon>
      </template>
    </n-input>
    <n-button @click="activate('right')" text style="font-size: 24px;">
      <n-icon>
        <BroadActivityFeed20Regular />
      </n-icon>
    </n-button>
  </n-layout-header>
  <router-view/>
  <n-drawer v-model:show="active" :width="268" :placement="placement">
    <n-drawer-content title="偏好设置">
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
  Search24Regular as Search24Regular,
  BroadActivityFeed20Regular as BroadActivityFeed20Regular
} from '@vicons/fluent'

export default defineComponent({
  name: 'App',
  components: {
    Search24Regular,
    BroadActivityFeed20Regular
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
.n-layout-header {
  height: 44px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  background: transparent;
}
::v-deep .n-drawer {
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  background: transparent;
}
</style>
