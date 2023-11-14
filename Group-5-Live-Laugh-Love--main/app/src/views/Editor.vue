<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import MakeNewAdventure from '../components/MakeNewAdventure.vue'
    import testStory from '../models/testData'

    var table = document.getElementById("storyTable");
    var modal = document.getElementById("eventModal");
    var span = document.getElementsByClassName("close")[0];

    function loadTable(){
        table = document.getElementById("storyTable");
        var result = "<table border=1>";
    for(var i=0; i<testStory.story.length; i++) {
        result += "<tr>";
        result += "<td contenteditable>"+testStory.story[i].id+"</td>";
        result += "<td contenteditable>"+testStory.story[i].title+"</td>";
        result += "<button class='btn' onclick = 'openDetails()'>Details</button>"
        result += "<button class='btn' onclick = 'deleteRow(this)'>Delete</button>"
        result += "</tr>";
    }
    result += "</table>";
    return result;
    }
    function deleteRow(btn) {
        var row = btn.parentNode;
        row.parentNode.removeChild(row);
    }
    function addRow() {
        let row = document.createElement("tr");
        let c1 = document.createElement("td");  let c2 = document.createElement("td");
        c1.innerText = "No ID";                 c2.innerText = "No Title";
        row.appendChild(c1);                    row.appendChild(c2);
        table?.appendChild(row)
    }
    function openDetails() {
        modal = document.getElementById("eventModal");
        modal.style.display = "block";
    }
    function closeDetails() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
</script>

<template>
    <make-new-adventure></make-new-adventure>
    <button class="btn btn-primary" v-on:click="loadTable()">Story Editor</button>
    <div id="eventModal" class="show-modal">
        <div class="modal-content overlay">
            <span class="close" onclick="closeDetails()">&times;</span>
            <p>Some text in the Modal..</p>
        </div>
    </div>
    <div id="container">
        <table striped hover items="items" id="storyTable">
            <thead>
                <th>ID</th>
                <th>Event</th>
            </thead>
            <tbody>
                <tr>
                    <td contenteditable>0</td>
                    <td contenteditable>Story Start</td>
                    <button class="btn" onclick = "openDetails()">Details</button>
                    <button class="btn" onclick = "deleteRow(this)">Delete</button>
                </tr>
            </tbody>
        </table>
    </div>
    <button class="btn" onclick = "addRow()">Add Row</button>
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
.show-modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>