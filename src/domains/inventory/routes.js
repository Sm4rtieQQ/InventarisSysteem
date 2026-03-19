import Overview from './pages/Overview.vue';
import Edit from './pages/Edit.vue';
import Create from './pages/Create.vue';
import Order from './pages/Order.vue';

export const routes = [
    {path: '/', name: '', redirect: '/Overview'},
    {path: '/Overview', name: 'Overview', component: Overview},
    {path: '/Edit/:id', name: 'Edit/:id', component: Edit},
    {path: '/Create', name: 'Create', component: Create},
    {path: '/Order', name: 'Order', component: Order},
];
