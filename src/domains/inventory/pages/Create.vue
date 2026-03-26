<script setup lang="ts">
import {ref} from 'vue';
import InventoryForm from '../components/InventoryForm.vue';
import {addItem, newItem} from '../store';
import type {Item} from '../store';
import type {Ref} from 'vue';

const localItem = ref({...newItem});
function handleSubmit(localItem: Ref<Item>) {
    addItem(localItem);
}
</script>

<template>
    <h3>Artikel toevoegen</h3>
    <InventoryForm :item="localItem" @submit="handleSubmit" />
</template>
