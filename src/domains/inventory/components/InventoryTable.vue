<script setup>
import { computed } from 'vue'
import { getFullInventory } from '../store';

const inventory = computed(() => getFullInventory.value)

</script>
<template>
    <div class="wrapper">
    <table>
        <thead>
            <tr>
                <th colspan="2">Item</th>
                <th>Mininmum</th>
                <th>Voorraad</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in inventory" :key="item.id">
                <td>{{ item.name }}</td>
                <td><RouterLink to="/Edit">✎</RouterLink></td>
                <td>{{ item.minimumAmount }}</td>
                <td><input type="number" v-model="item.actualAmount"></td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    overflow: hidden;
}

table {
    border-collapse: separate;
    border-spacing: 0;
}

th, td {
    text-align: left;
    padding: 12px;
    border: 1px solid darkgray;
}

th {
    background: hsla(200, 100%, 50%, 0.1);
    border: none,inherit, 5px double darkgray,inherit;
}

th:first-child {
    border-top-left-radius: 12px;
}

th:last-child {
    border-top-right-radius: 12px;
}

tr:last-child td:first-child {
    border-bottom-left-radius: 12px;
}

tr:last-child td:last-child {
    border-bottom-right-radius: 12px;
}

tbody tr:first-child td {
    border-top: none;
}

tbody tr:hover {
    background: rgb(45, 45, 45);
}

tbody td:first-child {
    border-right: none;
}

tbody td:nth-child(2) {
    border-left: none;
}

a {
    text-decoration: none;
}

input { 
    width: 64px;
    font-size: 12pt;
}
</style>