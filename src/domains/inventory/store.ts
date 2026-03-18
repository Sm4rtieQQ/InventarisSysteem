import {computed, ref, unref} from 'vue';

let id = 0;

//STATE
export type Item = {
    id: number;
    name: string;
    actualAmount: number;
    minimumAmount: number;
};

export let newItem = ref<Item>({
    id: 0,
    name: '',
    actualAmount: 0,
    minimumAmount: 0,
});

const inventory = ref<Item[]>([
    {
        id: id++,
        name: 'Aardbeien',
        actualAmount: 30,
        minimumAmount: 100,
    },
    {
        id: id++,
        name: 'Bananen',
        actualAmount: 100,
        minimumAmount: 30,
    },
    {
        id: id++,
        name: 'Citroenen',
        actualAmount: 15,
        minimumAmount: 15,
    },
    {
        id: id++,
        name: 'Druiven',
        actualAmount: 560,
        minimumAmount: 300,
    },
    {
        id: id++,
        name: 'Elstar appels',
        actualAmount: 100,
        minimumAmount: 75,
    },
    {
        id: id++,
        name: 'Frambozen',
        actualAmount: 30,
        minimumAmount: 100,
    },
    {
        id: id++,
        name: 'Goudrenetten',
        actualAmount: 60,
        minimumAmount: 75,
    },
]);

//GETTERS
export const getFullInventory = computed(() => inventory.value);
export const getItemById = (id: number) => computed(() => inventory.value.find(item => item.id == id));

//ACTIONS
export const addItem = (item: Item) => {
    const localItem = unref({...item});
    inventory.value.push(localItem);
    console.log(localItem);
    console.table(inventory.value);
};
