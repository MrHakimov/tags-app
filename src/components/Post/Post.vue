<template>
    <div class="header">
        <router-link :to="{name: 'instagram'}">
            <div class="btn btn-dark" >Instagram</div>
        </router-link>
        <router-link :to="{name: 'tik_tok'}">
            <div class="btn btn-info" >Tik Tok</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Post"
    }
</script>

<style scoped>
    div.header {
        padding: 12.5%;
        width: 100%;
    }

    .header div {
        width: 50%;
    }
</style>