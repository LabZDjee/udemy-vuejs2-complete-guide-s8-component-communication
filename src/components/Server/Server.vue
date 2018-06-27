<template>
    <div @mouseover="mouseOver()" @mouseout="mouseOut()" @click="mouseClick()"
         class="box" :class="colorClass">
         <p class="title" :class="[fontColor]" >{{ serverData.name }}</p> 
         <p class="subtitle">server #{{ serverData.id }}</p>
     </div>
</template>

<script>
import { eventBus } from "../../main"

export default {
  props: [ 'serverData' ],
  data: () => ({
     colorClass: {
       'has-background-primary': false,
       'has-background-info': false
     },
     isSelected: false
    }),
  computed: {
      fontColor: function() { return(this.serverData.status!="on" ? "has-text-grey-lighter":""); }
  },
  methods: {
      mouseOver() {
       this.colorClass['has-background-primary'] = false;
       this.colorClass['has-background-info'] = true;},
      mouseOut() {
       this.colorClass['has-background-primary'] = this.isSelected;
       this.colorClass['has-background-info'] = false;},
      mouseClick() {
       eventBus.clickedOnServer(this.serverData);
      }
  },
  created() {
            eventBus.$on('selectServer', (server) => {
              this.isSelected = (server===this.serverData);
              this.colorClass['has-background-primary'] = this.isSelected;
           });}
}
</script>

<style scoped>
 div {
     cursor: pointer
 }
</style>
