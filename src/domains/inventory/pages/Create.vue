<script setup>
import {ref} from 'vue';
import InventoryForm from '../components/InventoryForm.vue';
import {addItem, newItem} from '../store';

const localItem = ref({...newItem});
function handleSubmit(localItem) {
    addItem(localItem);
}
</script>

<template>
    <h3>Artikel toevoegen</h3>
    <InventoryForm :item="localItem" @submit="handleSubmit" />
</template>
