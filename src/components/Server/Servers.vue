<template>
  <div class="tile is-child">
   <div v-for="serv in serverDataArrayProxy" :key="serv.id">
    <server-overview :serverData="serv"></server-overview>
   </div>
  </div>
</template>

<script>
import { eventBus, serverDataArray } from "../../main";
import server from './Server.vue';

export default {
  components: { 'server-overview': server },
  data: function() {return {serverDataArrayProxy:  serverDataArray};},
  created() { eventBus.$on('clickedOnServer', (server) => {
          eventBus.selectServer(server);
         });
     }
}
</script>

<style scoped>
</style>
