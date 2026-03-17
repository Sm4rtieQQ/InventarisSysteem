import { computed, ref } from "vue";

let id = 0;

//STATE
type Item = {
    id: number, 
    name: string, 
    actualAmount: number, 
    minimumAmount: number
}

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
export const getFullInventory = computed(() => inventory.value)

//ACTIONS
export const addItem = (item: Item) => inventory.value.push(item);