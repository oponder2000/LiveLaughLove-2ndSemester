<script lang="ts">
    import { ref, onMounted } from 'vue';
    import MakeNewAdventure from '../components/MakeNewAdventure.vue'
    import Modal from '../components/Modal.vue'
    import testStory from '../models/testData'

    let table = document.getElementById("storyTable");

    function loadTable(){
        table = document.getElementById("storyTable");
        var result = "<table border=1>";
        for(var i=0; i<testStory.story.length; i++) {
            result += "<tr>";
            result += "<td contenteditable>"+testStory.story[i].id+"</td>";
            result += "<td contenteditable>"+testStory.story[i].title+"</td>";
            result += "<button class='btn' @click = 'openDetails()'>Details</button>"
            result += "<button class='btn' @click = 'deleteRow(this)'>Delete</button>"
            result += "</tr>";
        }
        result += "</table>";
        return result;
    }

    export default {
        name: 'Editor',
        components: {
            Modal,
            MakeNewAdventure
        },
        data() {
            return {
                isModalVisible: false,
                event: 0,
                tableRows: [{ name: "Home", number: 123 },
                { name: "Market", number: 345 }],
                counter: 1,
            };
        },
        methods: {
            showModal(index: any) {
                this.isModalVisible = true;
                this.event = index;
            },
            closeModal() {
                this.isModalVisible = false;
            },
            addRow() {
                this.counter++;
                this.tableRows.push({ name: "", number: -1 });
            },
            deleteRow(index: any) {
                this.tableRows.splice(index, 1);
            },
        }
    };
</script>
    
<template>
    <MakeNewAdventure></MakeNewAdventure>
    <button class="btn btn-primary" onclick="loadTable()">Story Editor</button>
    
    <div id="container">
        <!-- Button to open the modal -->
        <button class="btn" @click="showModal">Open Modal</button>
        <!-- Modal component -->
        <Modal v-if="isModalVisible" @close="closeModal">
            <p>This is a Vue.js modal!</p>
        </Modal>
    </div>
    
    <div id="container">
        <table striped hover items="items" id="storyTable">
            <thead>
                <th>ID</th>
                <th>Event</th>
            </thead>
            <tbody>
                <tr v-for="(tableData, index) in tableRows" :key="index" :id= index class="table-row">
                    <td>{{ index + 1 }}</td>
                    <td>
                        <input type="text" v-model="tableData.name" />
                    </td>
                    <button class="btn delete-button" @click="showModal(index)">Details</button>
                    <button class="btn delete-button" @click="deleteRow(index)">Remove</button>
                </tr>
            </tbody>
        </table>
        <button class="btn" @click = "addRow()">Add Row</button> 
    </div>
</template>

<style>
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    }
    td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    }
</style>