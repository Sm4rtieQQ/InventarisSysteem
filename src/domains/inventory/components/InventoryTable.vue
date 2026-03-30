<script setup lang="ts">
import {computed, ref} from 'vue';
import {getFullInventory, removeItem, editItem} from '../store';
import type {Item} from '../store';

const inventory = computed(() => getFullInventory.value);

function updateAmount(item: Item, value: string) {
    const updatedItem = {...item, actualAmount: Number(value)};
    editItem(ref(updatedItem));
}
</script>

<template>
    <div class="wrapper">
        <table>
            <thead>
                <tr>
                    <th colspan="2">Artikel</th>
                    <th>Mininmum</th>
                    <th>Voorraad</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in inventory" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>
                        <RouterLink :to="`/Edit/${item.id}`">✎</RouterLink>
                        <a @click="removeItem(item.id)">✘</a>
                    </td>
                    <td>{{ item.minimumAmount }}</td>
                    <td>
                        <input
                            :name="item.name"
                            type="number"
                            :value.number="item.actualAmount"
                            @change="
                                event => {
                                    updateAmount(item, (event.target as HTMLInputElement).value);
                                }
                            "
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
input {
    width: 64px;
}

tbody td:first-child {
    border-right: none;
}

tbody td:nth-child(2) {
    border-left: none;
}
</style>
