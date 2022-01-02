import { createApp } from 'vue'
import App from './App.vue'

import {
    // create naive ui
    create,
    // component
    NAnchor,
    NButton,
    NCard,
    NCollapse,
    NCollapseItem,
    NConfigProvider,
    NGrid,
    NGridItem,
    NIcon,
    NInput,
    NLayout,
    NLayoutContent,
    NLayoutHeader,
    NLayoutSider,
    NMenu,
    NSwitch,
    NTabs,
    NTabPane,
    NCalendar,
    NResult,
    NDrawer,
    NDrawerContent,
    NAnchorLink,
    NBackTop
} from 'naive-ui'

import router from './router'

const naive = create({
    components: [
        NAnchor,
        NAnchorLink,
        NButton,
        NLayout,
        NLayoutHeader,
        NLayoutSider,
        NLayoutContent,
        NMenu,
        NIcon,
        NConfigProvider,
        NCard,
        NCollapse,
        NCollapseItem,
        NDrawer,
        NDrawerContent,
        NGrid,
        NGridItem,
        NInput,
        NSwitch,
        NTabs,
        NTabPane,
        NCalendar,
        NResult,
        NBackTop
    ]
})

const app = createApp(App).use(router);
app.use(naive);
app.mount('#app');
