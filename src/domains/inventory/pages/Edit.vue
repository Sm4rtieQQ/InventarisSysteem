<script setup>
import InventoryForm from '../components/InventoryForm.vue';
import {useRoute} from 'vue-router';
import {getItemById} from '../store';

const route = useRoute();
const id = route.params.id;
let item = getItemById(id);
</script>

<template>
    <h3>Artikel aanpassen</h3>
    <InventoryForm :item="item" />
</template>
