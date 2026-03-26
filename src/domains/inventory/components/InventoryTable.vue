<script setup lang="ts">
import {computed} from 'vue';
import {getFullInventory, removeItem} from '../store';

const inventory = computed(() => [...getFullInventory.value]);
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
                    <td><input :name="item.name" type="number" v-model.number="item.actualAmount" /></td>
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
