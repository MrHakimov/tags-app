<template>
    <div id="app" class="id">
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item href="/">
                    <img src="./assets/q.png" width="32px" alt="logo">
                    Home
                </b-nav-item>
                <b-nav-item-dropdown text="Create Post" right>
                    <b-dropdown-item><router-link class="nav_bar"  :to="{name: 'instagram'}">Instagram</router-link></b-dropdown-item>
                    <b-dropdown-item><router-link class="nav_bar" :to="{name: 'tik_tok'}">TikTok</router-link></b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item ><router-link class="nav_bar" :to="{name: 'blogCatalog'}">Blog</router-link></b-nav-item>
                <b-nav-item ><router-link class="nav_bar" :to="{name: 'about'}">About</router-link></b-nav-item>

            </b-navbar-nav>
        </b-navbar>

        <keep-alive>
            <router-view>
            </router-view>
        </keep-alive>
        <div class="footer">
<!--            <p align="center">Copyright &copy; 2020</p>-->
            <notifications group="foo" position="bottom left"/>
        </div>
    </div>
</template>

<script>
    export default {

        name: 'App',
        components: {},
        computed: {},
        data() {

        }
    }
</script>

<style>
    .nav_bar{
        text-decoration: none;
        color: grey
    }
    .nav_bar:hover{
        text-decoration: none;
        color: #b6b6b6
    }
</style>
