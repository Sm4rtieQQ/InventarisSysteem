import {createMemoryHistory, createRouter} from 'vue-router';
import {routes} from '../domains/inventory/routes';

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
