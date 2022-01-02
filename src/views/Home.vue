<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :render-label="renderMenuLabel"
        :render-icon="renderMenuIcon"
        :expand-icon="expandIcon"
        accordion
      />
      <n-anchor
        listen-to=".document-scroll-container"
        :trigger-top="24"
        :top="88"
        style="z-index: 1;"
        :bound="24"
      >
      <n-anchor-link title="网址导航" href="#navstar">
        <n-anchor-link title="top" href="#navstar" />
        <n-anchor-link title="设计" href="#navdesign" />
        <n-anchor-link title="开发" href="#nav-dev" />
        <n-anchor-link title="产品" href="#nav-product" />
      </n-anchor-link>
      <n-anchor-link title="Props" href="#Props" />
    </n-anchor>
    </n-layout-sider>
    <n-layout-content content-style="width: 100%">
      <div class="board-title">开始</div>
      <!-- <Start id="nav-start"/> -->
      <router-view/>
    </n-layout-content>
  </n-layout>
</template>

<script>
import { defineComponent, h, ref } from 'vue'
// import Start from './web-nav/index.vue'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  DocumentPageNumber24Regular as ProjectsIconOutline,
  Star24Regular as StarIconOutline,
  Info24Regular as InfoIconOutline,
  Document24Regular as DocIconOutline,
  CheckmarkCircle24Regular as CheckmarkCircleIconOutline,
  Folder24Regular as FolderIconOutline,
} from '@vicons/fluent'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/start'
          }
        },
        { default: () => '开始' }
      ),
    key: 'start',
    icon: renderIcon(StarIconOutline)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/nav'
          }
        },
        { default: () => '网址导航' }
      ),
    key: 'nav',
    icon: renderIcon(StarIconOutline)
  },
  {
    label: '设计',
    key: 'dance-dance-dance',
    icon: renderIcon(StarIconOutline),
    children: [
      {
        label: '必看',
        key: 'beverage',
        href: '#navstar'
      },
      {
        label: '灵感',
        key: 'food',
        href: 'https://www.chiven.net/'
      },
      {
        label: () =>
          h(
            'a',
            {
              href: '#navdesign',
              rel: 'noopenner noreferrer'
            },
            '且听风吟'
          ),
        key: 'hear-the-wind-sing'
      },
    ]
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/'
          }
        },
        { default: () => '设计师' }
      ),
    key: 'all-doc',
    icon: renderIcon(ProjectsIconOutline),
    children: [
      {
        label: () =>
        h(
          RouterLink,
          {
            to: {
              path: '/nav#navstar'
            }
          },
          { default: () => '星标' }
        ),
        key: 'project-todo',
        icon: renderIcon(CheckmarkCircleIconOutline)
      },
      {
        label: () =>
        h(
          RouterLink,
          {
            to: {
              path: '/nav#navdesign'
            }
          },
          { default: () => '设计' }
        ),
        key: 'project-design',
        icon: renderIcon(CheckmarkCircleIconOutline)
      }
    ]
  },
  {
    label: '资源',
    key: 'project-book',
    icon: renderIcon(FolderIconOutline),
    children: [
      {
        type: 'group',
        label: '免版权图片',
        key: 'book-notebook',
        children: [
          {
            label: '前端学习',
            key: 'book-note-frontend',
            icon: renderIcon(DocIconOutline)
          },
          {
            label: '读书感悟',
            key: 'book-note-read',
            icon: renderIcon(DocIconOutline)
          }
        ]
      },
      {
        type: 'group',
        label: '写作',
        key: 'book-write',
        children: [
          {
            label: () =>
            h(
              RouterLink,
              {
                to: {
                  path: '/404'
                }
              },
              { default: () => '发财小妙招' }
            ),
            key: '087942',
            icon: renderIcon(DocIconOutline)
          },
          {
            label: () =>
            h(
              RouterLink,
              {
                to: {
                  path: '/404'
                }
              },
              { default: () => '捡不到钱' }
            ),
            key: '124355',
            icon: renderIcon(DocIconOutline)
          }
        ]
      },
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
    key: 'about',
    icon: renderIcon(InfoIconOutline)
  },
]

export default defineComponent({
  name: 'Home',
  components: {
    // Start,
  },
  setup () {
    
    return {
      menuOptions,
      collapsed: ref(false),
    }
  }
})
</script>
<style scoped>
.board-title {
  font-size: 36px;
  padding: 16px 20px 8px 20px;
}
</style>