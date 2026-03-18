<script setup>
import {ref} from 'vue';
const emit = defineEmits(['submit']);

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});

const localItem = ref({...props.item});
function submitItem() {
    if (localItem.value.name == '') return;
    emit('submit', localItem);
}
</script>

<template>
    <div class="wrapper">
        <table>
            <tbody>
                <tr>
                    <th>Artikel:</th>
                    <td>
                        <input id="newName" v-model="localItem.name" placeholder="Nieuw artikel" autocomplete="off" />
                    </td>
                </tr>
                <tr>
                    <th>Minimum voorraad:</th>
                    <td>
                        <input
                            id="newMinAmount"
                            type="number"
                            v-model.number="localItem.minimumAmount"
                            autocomplete="off"
                        />
                    </td>
                </tr>
                <tr>
                    <th>Huidige voorraad:</th>
                    <td>
                        <input
                            id="newActAmount"
                            type="number"
                            v-model.number="localItem.actualAmount"
                            autocomplete="off"
                        />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button @click="submitItem">Toepassen</button>
                        <button @click="$router.push('/Overview')">Annuleren</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
table {
    border-collapse: collapse;
    text-align: left;
}

th,
td {
    padding: 0 5px;
}
</style>
