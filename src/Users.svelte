<script>
    import { db } from "./firestore";
    import User from './User.svelte';
    import { Button } from "sveltestrap";
    
    let users = []
    let rank= ''
    let firstname=''
    let lastname = ''
    let badge = ''
    let createdAt=Date.now()

    db.collection('employees').onSnapshot( data => {
        users = data.docs
    })

    const addUser = () => {
        db.collection('employees').add({rank, firstname, lastname, badge, createdAt
        })
        rank=''
        firstname=''
        lastname=''
        badge=''
        createdAt=''
    }
</script>

<div class="user">
    <form on:submit|preventDefault={addUser}>
        <input type="text" bind:value={rank}>
        <input type="text" bind:value={firstname}>
        <input type="text" bind:value={lastname}>
        <input type="text" bind:value={badge}>
        <Button success>ADD</Button>
        </form>
    </div>

<div id="users">
    {#each users as user}
    <User id={user.id} user={user.data()} />

    {/each}
    </div>

<style>
    .user form{
        padding: .5%;
    }
</style>