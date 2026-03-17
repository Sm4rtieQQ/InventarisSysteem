import Overview from './pages/Overview.vue';
import Edit from './pages/Edit.vue';

export const routes = [
    {path: '/', redirect: '/Overview'},
    {path: '/Overview', component: Overview},
    {path: '/Edit/', component: Edit},
];
