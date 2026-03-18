<script setup>
import {ref} from 'vue';
import InventoryForm from '../components/InventoryForm.vue';
import {addItem, newItem} from '../store';

function handleSubmit(newItem) {
    addItem(newItem);
}
</script>

<template>
    <h3>Artikel toevoegen</h3>
    <InventoryForm :item="newItem" @submit="handleSubmit" />
</template>
