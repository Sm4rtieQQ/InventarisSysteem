<script setup lang="ts">
import {getLowStockInventory} from '../store';
import type {Item} from '../store';

const lowStockInventory = [...getLowStockInventory.value];

function getMinOrderAmount(item: Item) {
    return item.minimumAmount - item.actualAmount;
}
</script>

<template>
    <h3>Artikelen bestellen</h3>

    <div class="wrapper">
        <table>
            <thead>
                <tr>
                    <th>Artikel</th>
                    <th>Mininmum</th>
                    <th>Voorraad</th>
                    <th>Min. bestelaantal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in lowStockInventory">
                    <td>{{ item.name }}</td>
                    <td>{{ item.minimumAmount }}</td>
                    <td>{{ item.actualAmount }}</td>
                    <td>{{ getMinOrderAmount(item) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
