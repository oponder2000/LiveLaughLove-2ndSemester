<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import MakeNewAdventure from '../components/MakeNewAdventure.vue'
    var items = [
        {id: 0, title:'Home', description:'The doorbell rings.'},
        {id: 1, title:'Home', description:'A salesman gives you his run down.'},
        {id: 2, title:'Home', description:'The kitchen window breaks open.'}
    ]
    function deleteRow(btn) {
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
</script>

<template>
    <make-new-adventure></make-new-adventure>
    <h1>Editor</h1>
    <h2>Story</h2>
    <div id="container">
        <table striped hover items="items" id="storyTable">
            <thead>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Choice 1</th>
                <th>Choice 2</th>
                <th>Choice 3</th>
                <th>Choice 4</th>
            </thead>
            <tbody>
                <tr>
                    <td contenteditable>0</td>
                    <td contenteditable>Home</td>
                    <td contenteditable>The doorbell rings</td>
                    <td contenteditable>1</td> <td contenteditable>1</td>
                    <td contenteditable>1</td> <td contenteditable>1</td>
                    <button class="btn" id ="addDep" onclick = "add()">Add</button>
                    <button class="btn" id ="deleteDep" onclick = "deleteRow(this)">Delete</button>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Home</td>
                    <td>A salesman gives you his run down.</td>
                    <td contenteditable>1</td> <td contenteditable>1</td>
                    <td contenteditable>1</td> <td contenteditable>1</td>
                    <button class="btn" id ="addDep" onclick = "add()">Add</button>
                    <button class="btn" id ="deleteDep" onclick = "deleteRow(this)">Delete</button>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Home</td>
                    <td>The kitchen window breaks open.</td>
                    <td contenteditable>1</td> <td contenteditable>1</td>
                    <td contenteditable>1</td> <td contenteditable>1</td>
                    <button class="btn" id ="addDep" onclick = "add()">Add</button>
                    <button class="btn" id ="deleteDep" onclick = "deleteRow(this)">Delete</button>
                </tr>
            </tbody>
            
        </table>
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