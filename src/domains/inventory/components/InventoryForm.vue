<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});

const localItem = ref({...props.item});
const emit = defineEmits(['submit']);
const router = useRouter();

function submitItem() {
    if (localItem.value.name == '') return;
    emit('submit', localItem);
    router.push({name: 'Overview'});
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
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td>
                        <button @click="submitItem">Toepassen</button>
                        <button @click="$router.push({name: 'Overview'})">Annuleren</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<style scoped>
tfoot tr td {
    border: none;
}
</style>
