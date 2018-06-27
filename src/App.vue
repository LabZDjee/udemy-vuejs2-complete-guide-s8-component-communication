<template>
 <div>
    <div class="container">
        <app-header></app-header>
        <div class="tile is-ancestor">
         <div class="tile is-4 is-vertical is-parent">
            <servers></servers>
         </div>
         <div class="tile is-parent">
           <div class="tile is-child card">
            <app-server-details></app-server-details>
          </div>
         </div> 
        </div>
    </div>
    <app-footer></app-footer>
 </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style scoped>
</style>
