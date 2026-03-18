import {createWebHistory, createRouter} from 'vue-router';
import {routes} from '../domains/inventory/routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
