<script>
import { db } from "./firestore";
export let id =''
export let user = {}

const deleteUser = () => {
    db.collection('employees').doc(id).delete()
}

const updateUser = () => {
    db.collection('employees').doc(id).update({
        "rank":user.rank,
        "firstname":user.firstname,
        "lastname":user.lastname,
        "badge":user.badge
    })
}
</script>

<div class="user">
    <input type="text" bind:value={user.rank} >
    <input type="text" bind:value={user.firstname} >
    <input type="text" bind:value={user.lastname} >
    <input type="text" bind:value={user.badge} >
    <button on:click={updateUser}>Update</button>
    <button on:click={deleteUser}>DEL</button>
</div>

<style>
    .user{
        padding-left: 1.5px;
    }
</style>