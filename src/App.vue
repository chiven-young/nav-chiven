<template>
<n-config-provider :theme="theme" class="app-body">
  <n-layout-header :inverted="inverted" bordered>
    <div class="header-left">
      <div class="logo">
        <img src="../src/assets/logo.png" class="logo-img">
        <span class="logo-text">nav.chiven.net</span>
      </div>
    </div>
    <div class="header-center">
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
    </div>
    <div class="header-right">
      <n-input size="small" round placeholder="搜索" style="max-width: 200px;display:inline-block">
        <template #suffix>
          <n-icon>
            <Search24Regular />
          </n-icon>
        </template>
      </n-input>
      <n-button @click="activate('right')" text style="font-size: 24px;">
        <n-icon>
          <DockPanelLeft24Regular />
        </n-icon>
      </n-button>
    </div>
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
import { defineComponent, ref, h } from 'vue'
import { darkTheme } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  Search24Regular as Search24Regular,
  DockPanelLeft24Regular as DockPanelLeft24Regular
} from '@vicons/fluent'
const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/'
          }
        },
        { default: () => '主页' }
      ),
    key: 'home'
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://www.chiven.net',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        '人寻'
      ),
    key: 'hear-the-wind-sing'
  },
  {
    label: '资源',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator'
          },
          {
            label: '羊男',
            key: 'sheep-man'
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/about'
          }
        },
        { default: () => '关于' }
      ),
    key: 'about'
  },
]
export default defineComponent({
  name: 'App',
  components: {
    Search24Regular,
    DockPanelLeft24Regular
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
      theme: ref(null),
      activeKey: ref(null),
      menuOptions
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
  padding: 0 16px;
}
.logo {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
.logo-img {
  height: 36px;
}
.logo-text {
  font-size: 20px;
  font-weight: bold;
}
.header-right {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
::v-deep .n-drawer {
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  background: transparent;
}
</style>
