import {computed, ref} from 'vue';
import type {Ref} from 'vue';

let id = 0;

//STATE
type Item = {
    id: number;
    name: string;
    actualAmount: number;
    minimumAmount: number;
};

export const newItem: Item = {
    id: 0,
    name: '',
    actualAmount: 0,
    minimumAmount: 0,
};

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
function getIndexById(id: number) {
    return inventory.value.findIndex(index => index.id == id);
}

export const getFullInventory = computed(() => inventory.value);
export const getItemById = (id: number) => computed(() => inventory.value.find(item => item.id == id));

export const getLowStockInventory = computed(() => {
    return inventory.value.filter(item => item.actualAmount < item.minimumAmount);
});

//ACTIONS
export const addItem = (item: Ref<Item>) => {
    const localItem = {...item.value};
    localItem.id = id++;
    inventory.value.push(localItem);
};

export const editItem = (item: Ref<Item>) => {
    const index = getIndexById(item.value.id);
    inventory.value[index] = {...item.value};
};

export const removeItem = (id: number) => {
    const index = getIndexById(id);
    inventory.value.splice(index, 1);
};
