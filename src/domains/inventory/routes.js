import Overview from './pages/Overview.vue';
import Edit from './pages/Edit.vue';
import Create from './pages/Create.vue';

export const routes = [
    {path: '/', redirect: '/Overview'},
    {path: '/Overview', component: Overview},
    {path: '/Edit/:id', component: Edit},
    {path: '/Create', component: Create},
];
