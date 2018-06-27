<template>
 <div v-if="serverData">
  <header class="card-content" :class="[headerBackgroundClass]">
   <p class="title is-4">Status: {{ serverData.status }}</p>
   <p class="subtitle">Load: {{ serverData.load }}</p>
  </header>
  <div class="card-content">
   <p>{{ serverData.details }}</p>
  </div>
 </div>
 <div v-else class="card-content">
  <p>Please, select a server</p>
 </div>
 </template>

<script>
import { eventBus } from "../../main"

export default {
      data: () => ({
          serverData: null}),
      computed:  {
          headerBackgroundClass: function()
           {return this.serverData && this.serverData.status=="off" ? "has-background-warning" : "has-background-light";}
      },
      created() {
            eventBus.$on('selectServer', (server) => {
              this.serverData = server;
           });}
}
</script>

<style scoped>
</style>
