import { createApp } from 'vue'
import App from './App.vue'

import {
    // create naive ui
    create,
    // component
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
    NDrawer
} from 'naive-ui'

import router from './router'

const naive = create({
    components: [
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
        NGrid,
        NGridItem,
        NInput,
        NSwitch,
        NTabs,
        NTabPane,
        NCalendar,
        NResult
    ]
})

const app = createApp(App).use(router);
app.use(naive);
app.mount('#app');
