<script setup>
import InventoryForm from '../components/InventoryForm.vue';
import {useRoute} from 'vue-router';
import {editItem, getItemById} from '../store';

const route = useRoute();
const id = route.params.id;
let currentItem = getItemById(id);
</script>

<template>
    <h3>Artikel aanpassen</h3>
    <InventoryForm :item="currentItem" @submit="editItem" />
</template>
